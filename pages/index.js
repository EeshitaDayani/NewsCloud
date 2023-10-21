import React, { useState } from 'react';
import ThreeScene from '../src/components/ThreeScene';
import InputField from '../src/components/InputField';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (input) => {
    setSearchQuery(input);
  };

  console.log("index.js searchQuery: ", searchQuery)

  return (
    <div>
      <div>
        <ThreeScene searchQuery={searchQuery}/>
      </div>
      <div style={{position: 'absolute', top: 0, right: 0}}>
        <InputField onInputChange={handleInputChange}/>
      </div>
    </div>
  );
  }