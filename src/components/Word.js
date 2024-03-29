import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { MOBILE_FONT, NON_MOBILE_FONT } from '@/src/utils/constants';

export default function Word({ children, color, isMobile, hoverColor, url, ...props }) {
  const fontSize = isMobile ? MOBILE_FONT : NON_MOBILE_FONT;
  const fontProps = { font: '/Inter-Bold.woff', fontSize, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  const click = () => {
    isMobile ? window.location.href = url : window.open(url, '_blank')
  }

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
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
      color={color}
      children={children}
    />
  );
}
