import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Word ({ children, importance, ...props }) {
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
  
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
  
    const click = () => {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(children)}`
      window.open(searchUrl, '_blank')
    }
  
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
  
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion);
      
      // Animate font color based on importance (length of the word)
      const importanceFactor = Math.min(importance / 10, 1); // Normalize to 0-1
      const r = Math.round(255 * importanceFactor);
      const g = Math.round(255 * (1 - importanceFactor));
      const calculatedColor = new THREE.Color(`rgb(${r}, ${g}, 0)`);
      
      console.log(`Importance: ${importance}, Importance Factor: ${importanceFactor}, Calculated Color: ${calculatedColor.getHexString()}`);
      
      ref.current.material.color.lerp(calculatedColor, 0.1);
    })
    
  
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onPointerDown={click} {...props} {...fontProps} children={children} />
  }