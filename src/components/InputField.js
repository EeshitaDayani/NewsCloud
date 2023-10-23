import React, { useState } from 'react';
import { sharedFieldStyle } from '@/styles/fieldStyles';

export default function InputField({ onEnter }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleFocus = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Call the onEnter callback with the current input value
      if (onEnter) {
        onEnter(e.target.value);
      }
    }
  };

  return (
    <input
      style={{ ...sharedFieldStyle, top: '10px', maxWidth: '9.55vw', color: `rgba(230, 222, 209, ${isClicked ? '1' : '0.6'})` }}
      type="text"
      placeholder="Keyword"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyPress={handleKeyPress} // Handle Enter key press
    />
  );
}