// src/components/ThreeScene.js
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three';

import Cloud from './Cloud';

export default function ThreeScene() {
  return (
    <Canvas 
    onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('#000000')); // Set background color to black
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    dpr={[1, 2]}
    camera={{ position: [0, 0, 70], fov: 90, near: 1, far: 200 }}>
      <fog attach="fog" args={['#000000', 0, 100]} />
      <Cloud count={20} radius={40} />
      <TrackballControls />
    </Canvas>
  );
}
