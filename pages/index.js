import React, { useState } from 'react';
import ThreeScene from '../src/components/ThreeScene';
import InputField from '../src/components/InputField';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleEnter = (inputValue) => {
    setSearchQuery(inputValue);
  };

  return (
    <div>
      <div>
        <ThreeScene searchQuery={searchQuery}/>
      </div>
      <div style={{position: 'absolute', top: 0, right: 0}}>
        <InputField onEnter={handleEnter}/>
      </div>
    </div>
  );
  }