import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import Word from './Word';

const colorArr = [];
for (let i = 0; i < 20; i++) {
  const color = `rgb(255, ${Math.min(255, i * 13)}, 0)`;
  colorArr.push(color);
}

export default function Cloud({ count = 20, radius = 20, newsPhrases }) {
    const words = useMemo(() => {
      const temp = []
      const spherical = new THREE.Spherical()
  
      const phi = Math.PI * (3.0 - Math.sqrt(5.0)) // Golden angle to ensure even distribution
  
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / count) * 2 // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y)
  
        const theta = phi * i // Golden angle increment
  
        const x = Math.cos(theta) * radiusAtY
        const z = Math.sin(theta) * radiusAtY
  
        const spiralRadius = radius

        const index = i % newsPhrases.length;
        temp.push([new THREE.Vector3(x * spiralRadius, y * spiralRadius, z * spiralRadius), newsPhrases[index], colorArr[i]]);
    }
    return temp;
  }, [count, radius, newsPhrases]);

  return words.map(([pos, phrase, color], index) => (
    <Word key={index} position={pos} children={phrase} color={color} />
  ))
}