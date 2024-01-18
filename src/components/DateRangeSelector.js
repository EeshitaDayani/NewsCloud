import React from 'react';
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
  const handleSelect = (e) => {
      if (onSelect) {
        onSelect(e.target.value);
      }
  };

  return (
    <FormControl fullWidth>
      <ThemeProvider theme={darkTheme}>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          sx= {{ color: 'white' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleSelect}
          label="Time"
          defaultValue="lastWeek"
        >
          <MenuItem value="lastWeek">Last Week</MenuItem>
          <MenuItem value="lastMonth">Last Month</MenuItem>
        </Select>
      </ThemeProvider>
    </FormControl>
  );
}