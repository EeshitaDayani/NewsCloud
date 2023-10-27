import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import InputField from './InputField';
import DateRangeSelector from './DateRangeSelector';

export default function Header() {
    const handleEnter = (inputValue) => {
        setSearchQuery(inputValue);
      };

    return (
        <AppBar
            position="static"
            color="black"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
                NewsCloud
            </Typography>
            <nav>
                {/* <InputField onEnter={handleEnter} /> */}
            {/* <DateRangeSelector /> */}
            </nav>
            </Toolbar>
        </AppBar>
    )
}