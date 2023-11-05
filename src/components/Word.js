import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Word({ children, color, isMobile, hoverColor, url, ...props }) {
  const fontSize = isMobile ? 1.5 : 2.5;

  const fontProps = { font: '/Inter-Bold.woff', fontSize, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  const click = () => {
    window.open(url, '_blank')
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
    
    // Update text color based on hover state
    ref.current.material.color.copy(new THREE.Color(hovered ? hoverColor : color));
  })

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onPointerDown={click}
      {...props}
      {...fontProps}
      color={color} // Set initial color
      children={children}
    />
  );
}
