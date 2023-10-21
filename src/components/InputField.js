import React, { useState } from 'react';

export default function InputField({ onInputChange }) {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // Pass the input value to the parent component or function
    onInputChange(e.target.value);
  };

  const inputStyle = {
    position: 'absolute',
    top: '10px', // Adjust the top position as needed
    right: '10px', // Adjust the right position as needed
    backgroundColor: `rgba(0, 0, 0, ${isClicked ? '0.6' : '0'})`,
    color: `rgba(230, 222, 209, ${isClicked ? '1' : '0.6'})`,
    border: '2px',
    margin: '20px',
    padding: '4px',
    fontSize: '15px',
    width: '10vw',
    outerHeight: '5vw',
    opacity: '0.6',
    outline: 'none',
    transition: 'color 0.3s ease',
    zIndex: 1, // Ensure the input box is above other elements
  };

  return (
    <input
      style={inputStyle}
      type="text"
      placeholder="Type here"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange} // Capture input changes
      value={inputValue} // Control the input value with state
    />
  );
}