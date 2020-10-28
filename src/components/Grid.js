import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    hide: {
        display: 'none',
    },
}));


const GridExample = () => {

    const classes = useStyles();

    const [dev, setDev] = React.useState(true);
    
    return (
        <Container maxWidth="lg">

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} className={clsx(classes.grid, dev && classes.hide)}>
                    <Box className={classes.box}>xs=12</Box>
                </Grid>
                <Grid item xs={6} className={clsx(dev && classes.hide)}>
                    <Box className={classes.box}>xs=6</Box>
                </Grid>
                <Grid item xs={6} className={clsx(dev && classes.hide)}>
                    <Box className={classes.box}>xs=6</Box>
                </Grid>

                <Grid item xs={3}>
                    <Box className={classes.box}>xs=3</Box>
                </Grid>

                <Grid item xs={3}>
                    <Box className={classes.box}>xs=3</Box>
                </Grid>

                <Grid item xs={3}>
                    <Box className={classes.box}>xs=3</Box>
                </Grid>

                <Grid item xs={3}>
                    <Box className={classes.box}>xs=3</Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GridExample;