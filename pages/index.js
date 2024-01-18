import React, { useState, useEffect } from 'react';

import ThreeScene from '@/src/components/ThreeScene';
import TopNavbar from '@/src/components/TopNavbar';
import InstructionsPopup from '@/src/components/InstructionsPopup';
import BottomBar from '@/src/components/BottomBar';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(true); // TODO: Refactor to put isMobile check in CSS
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState('lastWeek');

  useEffect(() => {
    const calculateScreenSize = () => window.innerWidth < 768;
    setIsMobile(calculateScreenSize());

    const handleResize = () => {
      setIsMobile(calculateScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.threeSceneContainer}>
        <ThreeScene searchQuery={searchQuery} date={date} isMobile={isMobile} />
      </div>
      <InstructionsPopup/>
      <TopNavbar setSearchQuery={setSearchQuery} setDate={setDate} />
      <BottomBar/>
    </div>
  );
}
