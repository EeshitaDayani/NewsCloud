import React, { useState, useEffect } from 'react';
import ThreeScene from '../src/components/ThreeScene';
import Header from '../src/components/Header';
import InputField from '../src/components/InputField';
import DateRangeSelector from '../src/components/DateRangeSelector';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState('lastWeek');

  const handleEnter = (inputValue) => {
    setSearchQuery(inputValue);
  };

  const handleSelect = (inputValue) => {
    setDate(inputValue);
  };

  const [device, setDevice] = useState('mobile'); // Initial font size

  useEffect(() => {
    const calculateScreenSize = () => {
      const screenWidth = window.innerWidth;
      // Adjust this logic based on your requirements
      if (screenWidth < 480) {
        return 'mobile';
      } else if (screenWidth < 768) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    };

    // Set the initial font size
    setDevice(calculateScreenSize());

    // Update font size on window resize
    const handleResize = () => {
      setDevice(calculateScreenSize());
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.threeSceneContainer}>
          <ThreeScene searchQuery={searchQuery} date={date} device={device} />
        </div>
        <div className={styles.contentContainer}>
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, '*': { userSelect: 'none' } }} />
          <CssBaseline />

          <Toolbar className={styles.toolbar}>
            <Typography variant='h3' noWrap fontFamily={'Inter'} className={styles.title}>
              <span className={styles.titlePartOne}>
                NEWS
              </span>
              <span className={styles.titlePartTwo}>
                CLOUD
              </span>
            </Typography>
            <div className={styles.inputContainer}>
              <div className={styles.inputField}>
                <InputField onEnter={handleEnter} />
              </div>
              <div className={styles.dateSelector}>
                <DateRangeSelector onSelect={handleSelect} />
              </div>
            </div>
          </Toolbar>
        </div>
      </div>
    </div>
  );
}
