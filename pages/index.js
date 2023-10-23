import React, { useState } from 'react';
import ThreeScene from '../src/components/ThreeScene';
import InputField from '../src/components/InputField';
import DateRangeSelector from '../src/components/DateRangeSelector';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState('lastWeek');

  const handleEnter = (inputValue) => {
    setSearchQuery(inputValue);
  };

  const handleSelect = (inputValue) => {
    setDate(inputValue);
  };

  return (
    <div>
      <div>
        <ThreeScene searchQuery={searchQuery} date={date} />
      </div>
      <div>
        <InputField onEnter={handleEnter}/>
        <DateRangeSelector onSelect={handleSelect} />
      </div>
    </div>
  );
  }