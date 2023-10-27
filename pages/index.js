import React, { useState } from 'react';
import ThreeScene from '../src/components/ThreeScene';
import Header from '../src/components/Header';
import InputField from '../src/components/InputField';
import DateRangeSelector from '../src/components/DateRangeSelector';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

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
      <div style={{ display: 'grid',  gridGap: '20px' }}>
        <div>
          <ThreeScene searchQuery={searchQuery} date={date} />
        </div>
        <div id="hello" styles={{ padding: 0 }} >
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
          <CssBaseline />

          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3" noWrap sx={{ flexGrow: 1 }}>
            <span style={{ color: 'white' }}>NEWS</span>
            <span style={{ color: 'grey' }}>CLOUD</span>
          </Typography>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ marginRight: '8px', marginTop: '9px' }}>
                  <InputField onEnter={handleEnter} />
                </div>
                <div style={{ marginLeft: '8px', marginTop: '9px' }}>
                  <DateRangeSelector onSelect={handleSelect} />
                </div>
              </div>
          </Toolbar>
        </div>
      </div>
    </div>
  );
}
