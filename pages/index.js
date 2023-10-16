import React, { useState } from 'react';
import ThreeScene from '../src/components/ThreeScene';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleFocus = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  const textColor = isClicked ? 'rgba(230,222,209,0.3)' : 'rgba(230,222,209,0.6)';


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
    <div>
      <div>
        <ThreeScene />
      </div>
      <div style={{position: 'absolute', top: 0, right: 0}}>
            <input style={inputStyle} 
                   type="text" 
                   placeholder="Type here"
                   onFocus={handleFocus}
                   onBlur={handleBlur} />
      </div>
    </div>
  );
}