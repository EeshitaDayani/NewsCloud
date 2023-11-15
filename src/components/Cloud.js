import React, { useMemo } from 'react';
import * as THREE from 'three';
import Word from './Word';
import { COLOR_ARRAY, WHEEL_RADIUS } from '@/src/utils/constants';

export default function Cloud({ headlines, isMobile, radius }) {
  const count = headlines.length;

  const calculatePosition = (i, delta, phi) => {
    if (isMobile) {
      const theta = delta * i + Math.PI / 2;
      const x = WHEEL_RADIUS * Math.sin(theta);
      const y = WHEEL_RADIUS * Math.cos(theta);
      const z = 0;

      const position = new THREE.Vector3(x, y, z);
      position.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);

      return position;
    } else {
      const y = -1 + 2 * i / count;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return new THREE.Vector3(x * radius, y * radius, z * radius);
    }
  };

  const words = useMemo(() => {
    const temp = [];
    const delta = isMobile ? (2 * Math.PI) / count : 0;
    const phi = Math.PI * (3.0 - Math.sqrt(5.0));

    for (let i = 0; i < count; i++) {
      const position = calculatePosition(i, delta, phi);

      const index = i % headlines.length;
      temp.push([position, headlines[index].title, COLOR_ARRAY[index]]);
    }

    return temp;
  }, [count, radius, headlines, isMobile]);

  return words.map(([pos, phrase, color], index) => (
    <Word key={index} position={pos} isMobile={isMobile} children={phrase} color={color} url={headlines[index].url} />
  ));
}
