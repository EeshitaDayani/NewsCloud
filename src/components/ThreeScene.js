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

  return (
    <Canvas
      onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#121212'))}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}
    >
      <fog attach="fog" args={['#121212', 0, 100]} />
      <Billboard>
        { (isValidating || !data) && <Text children="Loading..." {...fontProps} /> } 
        { headlines.length === 0 && (<Text children="No search results" {...fontProps} />) }
        { error && (<Text children="Sorry, an error occurred." {...fontProps} />) } 
      </Billboard>
      <Cloud radius={40} headlines={headlines} isMobile={isMobile} />
      <TrackballControls />
    </Canvas>
  );
}