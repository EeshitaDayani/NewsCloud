import { Canvas } from '@react-three/fiber';
import { Billboard, Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';
import useSWR from 'swr';

import Cloud from './Cloud';
import getDate from './../utils/getDate';

const fetcher = (url) => fetch(url).then(r => r.json())
const fontProps = { fontSize: 5.5, 
                    letterSpacing: -0.05, 
                    lineHeight: 1, 
                    'material-toneMapped': false, 
                    color: 'white'}

export default function ThreeScene({ searchQuery, date, isMobile }) {
  const { data, isValidating } = useSWR(`/api/fetchNews?q=${searchQuery}&from=${getDate(date)}`, fetcher);
  const { error } = data ? data : '';
  const headlines = data && data.data ? data.data.map(item => ({ 'title': item.title, 'url': item.url })) : [];

  if (isValidating || !data) {
    // Show loading screen while data is being fetched
    return (
      <Canvas
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#121212'))}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}
      >
        <fog attach="fog" args={['#121212', 0, 100]} />
        <Billboard>
          <Text children="Loading..." {...fontProps} />
        </Billboard>
      </Canvas>
    );
  }

  if (error) {
    return (
      <Canvas
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#121212'))}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}
      >
        <fog attach="fog" args={['#121212', 0, 100]} />
        <Billboard>
          <Text children="Sorry, an error occurred." {...fontProps} />
        </Billboard>
      </Canvas>
    );
  }

  if (headlines.length === 0) {
    return (
      <Canvas
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#121212'))}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}
      >
        <fog attach="fog" args={['#121212', 0, 100]} />
        <Billboard>
          <Text children="No search results" {...fontProps} />
        </Billboard>
      </Canvas>
    );
  }

  return (
    <Canvas
      onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#121212'))}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}
    >
      <fog attach="fog" args={['#121212', 0, 100]} />
      <Cloud radius={40} headlines={headlines} isMobile={isMobile} />
      <TrackballControls />
    </Canvas>
  );
}
