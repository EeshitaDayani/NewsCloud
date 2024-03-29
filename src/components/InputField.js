import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function InputField({ onEnter }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (onEnter) {
        onEnter(e.target.value);
      }
    }
  };

  return (
      <div style={{ zIndex:1 }} >
        <ThemeProvider theme={darkTheme}>
          <TextField id="outlined-basic" label="Search for news" variant="outlined" onKeyPress={handleKeyPress} />
        </ThemeProvider>
      </div>
  );
}