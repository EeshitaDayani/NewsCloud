import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import Word from './Word';

const colorArr = [];
for (let i = 0; i < 20; i++) {
  const color = `rgb(255, ${Math.min(255, i * 13)}, 0)`;
  colorArr.push(color);
}

export default function Cloud({ headlines, isMobile, radius }) {
  const count = headlines.length;

  if (isMobile) {
    const wheelRadius = 35; 

    const words = useMemo(() => {
      const temp = [];
      const deltaY = (2 * Math.PI) / count; // Calculate the angular spacing between headlines

      for (let i = 0; i < count; i++) {
        // Include a 90-degree rotation for the initial view
        const theta = deltaY * i + Math.PI / 2; // Distribute along the angular axis with a 90-degree rotation

        const x = wheelRadius * Math.sin(theta); // Position along the circular path
        const y = wheelRadius * Math.cos(theta); // Position along the height
        const z = 0; // Center the words along the Z-axis

        const position = new THREE.Vector3(x, y, z);

        // Apply 90-degree rotation for all headlines
        position.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);

        temp.push([position, headlines[i].title, colorArr[i]]);
      }

      return temp;
    }, [count, headlines]);

    return words.map(([pos, phrase, color], index) => (
      <Word
        key={index}
        position={pos}
        isMobile={isMobile}
        children={phrase}
        color={color}
        url={headlines[index].url}
      />
    ))
  } else {
    const words = useMemo(() => {
      const temp = []
      const phi = Math.PI * (3.0 - Math.sqrt(5.0)) // Golden angle to ensure even distribution

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / count) * 2 // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y)

        const theta = phi * i // Golden angle increment

        const x = Math.cos(theta) * radiusAtY
        const z = Math.sin(theta) * radiusAtY

        const spiralRadius = radius

        const index = i % headlines.length;
        temp.push([new THREE.Vector3(x * spiralRadius, y * spiralRadius, z * spiralRadius), headlines[index].title, colorArr[i]]);
      }

      return temp;
    }, [count, radius, headlines]);

    return words.map(([pos, phrase, color], index) => (
      <Word key={index} position={pos} children={phrase} color={color} url={headlines[index].url} />
    ))
  }
}
