// src/components/ThreeScene.js
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';
import useSWR from 'swr';

import Cloud from './Cloud';

const fetcher = (url) => fetch(url).then(r => r.json())
const fontProps = { fontSize: 5.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false, color: 'white'}

export default function ThreeScene({ searchQuery }) {
  const { data } = useSWR(`/api/fetchNews?q=${searchQuery}`, fetcher);
  const { error } = data ? data : '';
  const headlines = data && data.data ? data.data.map(item => item.title) : [];

  if (error) {
    return (
    <Canvas onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#121212')); // Set background color to black
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}>
      <fog attach="fog" args={['#121212', 0, 100]} />
      <Text children={ "Sorry, an error occurred." } { ...fontProps } ></Text>
      </Canvas>
    )
  }

  if (!headlines) {
    console.log("headlines error")
    return (
    <Canvas 
    onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#121212')); // Set background color to black
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    dpr={[1, 2]}
    camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}>
      <fog attach="fog" args={['#121212', 0, 100]} />
      </Canvas>
    )
  }

  return (
    <div>
    <Canvas 
    onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#121212')); // Set background color to black
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    dpr={[1, 2]}
    camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}>
      <fog attach="fog" args={['#121212', 0, 100]} />
      <Cloud radius={40} newsPhrases={ headlines } />
      <TrackballControls />
    </Canvas>
    </div>
  );
}
