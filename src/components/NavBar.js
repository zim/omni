import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import theme from '../theme';

const useStyles = makeStyles((classes) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    menuItem: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white",
        // marginRight: 20,
    },
    appBar: {
        marginBottom: theme.spacing(2),
    },
}));

const NavBar = () => {
    const classes = useStyles();


    return (
  
        <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                   

                <Link href="/todolist" color="inherit" className={classes.menuItem}>
                        <Typography variant="h6" className={classes.title}>

                            Todo List
                        </Typography>
                    </Link>
                
                <Link href="/about" color="inherit" className={classes.menuItem}>
                        <Typography variant="h6" className={classes.title}>
                            About
                        </Typography>

                    </Link>
                <Link href="/grid" color="inherit" className={classes.menuItem}>
                        <Typography variant="h6" className={classes.title}>
                            Grid
                        </Typography>
                    </Link>




                   
                </Toolbar>
            </AppBar>

    );
};

export default NavBar;