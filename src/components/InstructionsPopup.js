import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CssBaseline from '@mui/material/CssBaseline';

import styles from '@/styles/InstructionsPopup.module.css';

export default function InstructionsPopup() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  // Define your dark mode theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dialog open={open} onClose={handleClose} aria-labelledby="instructions-dialog-title" PaperProps={{ sx: { borderRadius: "20px", backgroundColor: '#000000' } }}>
        <DialogTitle id="instructions-dialog-title">Welcome to NewsCloud!</DialogTitle>
        <DialogContent style={{ paddingBottom: 0 }}>
          <DialogContentText component={'div'}>
            <ul className={styles.mobileText} style={{  listStyleType: 'disc', paddingInlineStart: '1em' }}>
                <li>Scroll to see all headlines.</li>
                <li>Pinch to zoom in and out.</li>
                <li>Move left and right to rotate the view.</li>
            </ul>
            <ul className={styles.nonMobileText} style={{  listStyleType: 'disc', paddingInlineStart: '1em' }}>
                <li>Scroll to zoom in and out.</li>
                <li>Click and drag to pan the view.</li>  
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', padding: '16px 24px' }}>
          <Button onClick={handleClose} sx={{
              color: '#ffffff',  
              border: '1px solid', 
              borderRadius: '10px', 
            }} >Got it</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
