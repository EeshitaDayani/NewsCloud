import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';

import Word from './Word';

const newsPhrases = [
    'Global Leaders Announce Climate Change Action Plan Today',
    'Tech Giants Unveil Breakthrough Artificial Intelligence Innovations',
    'World Health Organization Addresses Ongoing Public Health Concerns',
    'Financial Markets React to Unprecedented Economic Policy Changes',
    'Space Exploration Mission Reveals Surprising Discoveries on Mars',
    'Major International Summit Focuses on Peace and Diplomacy',
    'Groundbreaking Study Offers New Insights into Cancer Research',
    'Environmental Activists Rally for Sustainable Practices Worldwide',
    'Political Turmoil Continues as Elections Approach in Key Regions',
    'Investigation Uncovers Corporate Scandals in Banking and Finance',
    'New Technology Promises Revolutionary Advances in Clean Energy',
    'Humanitarian Crisis Escalates in Conflict-Stricken Regions',
    'Innovative Education Initiatives Transform Learning for Students',
    'Crisis in the Middle East Sparks Global Security Concerns',
    'Breaking News: Celebrity Philanthropist Launches Charity Foundation',
    'Advancements in Medical Research Bring Hope for Rare Diseases',
    'Government Initiatives Tackle Rising Unemployment Rates',
    'Entertainment Industry Faces Challenges Amid Changing Consumer Trends',
    'Global Economy Faces Uncertainty with Trade Agreement Negotiations',
    'Scientific Community Debates Ethical Implications of Genetic Engineering'
  ]

export default function Cloud({ count = 20, radius = 20 }) {
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
        temp.push([new THREE.Vector3(x * spiralRadius, y * spiralRadius, z * spiralRadius), newsPhrases[i % newsPhrases.length]])
      }
      return temp
    }, [count, radius])
  
     return words.map(([pos, phrase], index) => <Word key={index} position={pos} children={phrase} />)
  }