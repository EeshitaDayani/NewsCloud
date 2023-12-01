import React, { useState, useEffect } from 'react';

import ThreeScene from '../src/components/ThreeScene';
import TopNavbar from '../src/components/TopNavbar';
import InstructionsPopup from '../src/components/InstructionsPopup';
import ColorScale from '../src/components/ColorScale';

import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(true); // TODO: Refactor to put isMobile check in CSS
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState('lastWeek');

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
      <TopNavbar setSearchQuery={setSearchQuery} setDate={setDate} />
      {/* <ColorScale /> TODO: Uncomment once hover text is implemented */}
      <GitHubIcon className={styles.github} onClick={() => window.open('https://github.com/EeshitaDayani/NewsCloud_v2', '_blank')} />
    </div>
  );
}
