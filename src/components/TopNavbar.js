import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import InputField from '@/src/components/InputField';
import DateRangeSelector from '@/src/components/DateRangeSelector';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '@/styles/TopNavbar.module.css';

export default function TopNavbar({ setSearchQuery, setDate }) {
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

    return (
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
    )
}