import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CssBaseline from '@mui/material/CssBaseline';
import { purple } from '@mui/material/colors';
import { Center } from '@react-three/drei';

const InstructionsPopup = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  // Define your dark mode theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      text: {
        // primary: '#000000',
      }
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dialog open={open} onClose={handleClose} aria-labelledby="instructions-dialog-title" PaperProps={{ sx: { borderRadius: "20px", backgroundColor: '#000000' } }}>
        <DialogTitle id="instructions-dialog-title">Welcome to NewsCloud!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul style={{  listStyleType: 'disc', paddingInlineStart: '1em' }}>
              <li>Scroll to zoom in and out.</li>
              <li>Click and drag to pan the view.</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center' }}>
          <Button onClick={handleClose} sx={{
              color: '#ffffff',  // Set button text color to white
              border: '1px solid', // Add a 2px white border
              borderRadius: '15px', // Add border-radius for rounded corners
            }} >Got it</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default InstructionsPopup;
