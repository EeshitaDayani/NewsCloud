import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Word({ children, color, ...props }) {
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
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
    ref.current.material.color.copy(new THREE.Color(color));
  })

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} onPointerDown={click} {...props} {...fontProps} children={children} />
}