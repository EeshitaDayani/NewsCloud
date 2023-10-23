import React, { useState } from 'react';
import ThreeScene from '../src/components/ThreeScene';
import InputField from '../src/components/InputField';
import DateRangeSelector from '../src/components/DateRangeSelector';

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
      <div>
        <InputField onEnter={handleEnter}/>
        <DateRangeSelector/>
      </div>
    </div>
  );
  }