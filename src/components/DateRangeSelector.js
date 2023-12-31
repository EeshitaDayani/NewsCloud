import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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

      const [selectedDate, setSelectedDate] = useState(null);

      const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      return (
        
        <Box sx={{ minWidth: 120 }}>
          
          <FormControl fullWidth>
            <ThemeProvider theme={darkTheme}>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                sx= {{
                  color: 'white'

                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleSelect}
                label="Time"
                defaultValue="lastWeek"
              >
                <MenuItem value="lastWeek">Last Week</MenuItem>
                <MenuItem value="lastMonth">Last Month</MenuItem>
              </Select>
            </ThemeProvider>
          </FormControl>
        </Box>
      );
  }