import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import ThreeScene from '../src/components/ThreeScene';
import InputField from '../src/components/InputField';
import DateRangeSelector from '../src/components/DateRangeSelector';
import InstructionsPopup from '../src/components/InstructionsPopup';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import GitHubIcon from '@mui/icons-material/GitHub';
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

  const router = useRouter();
  const handleRefresh = () => {
    router.reload();
  };

  const [isMobile, setIsMobile] = useState(true); // Initial font size

  useEffect(() => {
    const calculateScreenSize = () => {
      return window.innerWidth < 480
    };

    // Set the initial font size
    setIsMobile(calculateScreenSize());

    // Update font size on window resize
    const handleResize = () => {
      setIsMobile(calculateScreenSize());
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.threeSceneContainer}>
        <ThreeScene searchQuery={searchQuery} date={date} isMobile={isMobile} />
      </div>
      <InstructionsPopup/>
      <div className={styles.contentContainer}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }, '*': { userSelect: 'none' } }} />
        <CssBaseline />

        <Toolbar className={styles.toolbar}>
          <div>
            <div className={styles.title} onClick={handleRefresh}>
              <Typography variant='h3' noWrap fontFamily={'Inter'}>
                <span className={styles.titlePartOne}>
                  NEWS
                </span>
                <span className={styles.titlePartTwo}>
                  CLOUD
                </span>
              </Typography>
            </div>
            <div className={styles.subtitle} onClick={handleRefresh}>
              <Typography variant='h6' noWrap fontFamily={'Inter'}>
                <span className={styles.titlePartTwo}>
                YOUR DAILY NEWS SNAPSHOT
                </span>
              </Typography>
            </div>
          </div>
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
      <GitHubIcon className={styles.github} onClick={() => window.open('https://github.com/EeshitaDayani/NewsCloud_v2', '_blank')} />
    </div>
  );
}
