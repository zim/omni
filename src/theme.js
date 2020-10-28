import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    spacing: 8,
    palette: {
        primary: {
            main: "#4E4934",
        },
        secondary: {
            main: green[500],
        },
    },
    
});

export default theme;