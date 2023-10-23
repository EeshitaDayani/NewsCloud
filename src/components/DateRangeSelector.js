import React, { useState } from 'react';
import { sharedFieldStyle } from '@/styles/fieldStyles';

export default function DateRangeSelector({ onSelect }) {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleFocus = () => {
      setIsClicked(true);
    };
  
    const handleBlur = () => {
      setIsClicked(false);
    };

    const handleSelect = (e) => {
        if (onSelect) {
          onSelect(e.target.value);
        }
      };
  
    return (
        <select
        style={{ ...sharedFieldStyle, top: '60px', minWidth: '10vw', color: `rgba(230, 222, 209, ${isClicked ? '1' : '0.6'})` }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSelect}
      >
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="lastWeek">Last Week</option>
        <option value="lastMonth">Last Month</option>
        <option value="custom">Custom</option>
      </select>
    );
  }