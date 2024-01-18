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

  const billboardText = () => {
    if (isValidating || !data) return (<Text children="Loading..." {...fontProps} />);
    if (headlines.length === 0) return (<Text children="No search results" {...fontProps} />)
    if (error) return (<Text children="Sorry, an error occurred." {...fontProps} />)
  }

  return (
    <Canvas
      onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#121212'))}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}
    >
      <fog attach="fog" args={['#121212', 0, 100]} />
      <Billboard>
        {billboardText()}
      </Billboard>
      <Cloud radius={40} headlines={headlines} isMobile={isMobile} />
      <TrackballControls />
    </Canvas>
  );
}