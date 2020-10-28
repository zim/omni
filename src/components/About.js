import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Container, Box, Button, Modal, Backdrop, Fade, Typography } from '@material-ui/core';

// cloud name dg8ckygz0
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        minWidth: 600,
        margin: '0px!important',
    },
    listItemText: {
        border: '2px solid red',
        alignItems: 'left',
        justifyContent: 'left',
    },
    todolist: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        minWidth: 600,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '60%',
        outline: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    boxContainer: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin: '0px!important',
    },
    box: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    grid: {

    },
}));

    
const About = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.boxContainer}>

            <Grid item xs={12} className={clsx(classes.grid)}>
                <Box className={classes.box}>
                    <Typography variant="h1">
                        About
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.box}>
                    <Typography variant="body1" gutterBottom>
                        So I have certainly worked with quite a few libraries and api's onviouaslsy React.js, React hooks for spplicastion state and ui state.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Then thought I would use React-Router 4 for the paths
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Up to this point I was kind of working ith the React Botstrap libray and implementation to control layout and grid and styles javascript. too. But as wew did mention Material.ui I thought I would use this. Have touced on some concepts and styled compnents a bit bit this is rwall good leafrning curve as there is actually a lot that can be done and that would help to learn top properly utilizt this for a react app ui control. ad more.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        So for instance regarding the form validation task. it did take me a bit longer, because I wanted to try and follow best practices and Material UI docs. In fact this is the case throughout out as it is extensive in its capabilities...
                    </Typography>
                    <Typography variant="body1"gutterBottom>
                        So the only reaon I have included the server is to implement my image upload functionality. Using third party image hosting cloudinary.com
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        So the only reaon I have included the server is to implement my image upload functionality. Using third party image hosting cloudinary.com
                    </Typography>
                </Box>
            </Grid>
            
        </Grid>

    );
}

export default About;