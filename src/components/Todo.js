import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Container, Card, CardContent, CardActions, CardMedia, Typography, Checkbox, Button, Paper } from '@material-ui/core';
// import { IconButton, FavoriteIcon, ShareIcon } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        // minWidth: 600,
        margin: theme.spacing(2, 0),
        display: 'flex',
        justifyContent: 'space-between',
    },
    flexit: {
        display: 'flex',
    },
    foo: props => ({
        backgroundColor: props.backgroundColor,
    }),
    bar: {
        // CSS property
        color: props => props.color,
    },
    todoComplete: {
        backgroundColor: '#4e493466',
    },
    todoOverdue: {
        backgroundColor: '#ff000057',
    },
    checkbox: {

        margin: '2px 9px 0px 0px',
    },
    media: {
        height: 100,
        width: 100,
    },
    itemImage: {
        width: '100%',
        padding: '22px 16px 0px 16px',
    },
}));


const Todo =

    ({
        id,
        title,
        description,
        dueDate,
        complete,
        imagePath,
        handleToggle,
        checked,
        todos,
        setTodos,
        completeTodo,
        removeTodo,
        editTodo,
        editId,
        handleEditChange,
        inputValue,
        setInputValue
    }) => {
        // console.log(props);
        // const classes = useStyles();
        // Simulated props for the purpose of the example
        const props = { backgroundColor: 'black', color: 'white' };
        // Pass the props as the first argument of useStyles()
        const classes = useStyles(props);

        // console.log(dueDate);

        const today = new Date();

        const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        // console.log(dateToday);

        if (dueDate < dateToday) {
            // console.log("start time is lesser");
        }

        // complete ? classes.todoComplete : (dueDate < dateToday) && classes.todoOverdue;


        return (


            <Card key={id} className={clsx(classes.root, complete ? classes.todoComplete : (dueDate < dateToday) && classes.todoOverdue)}>

                <Grid container spacing={3} className={classes.boxContainer}>
                    <Grid item xs={12} sm={1} >
                        <img src={imagePath} title={imagePath} className={classes.itemImage} />
                
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <CardContent>
                            <Typography variant="h5" className={title} color="textSecondary" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                    </Grid>
                    
                    <Grid item xs={12} sm={3}>
                        <CardContent className={classes.flexit}>
                            <Typography color="textSecondary">
                                Due Date:
                        <br />
                                {dueDate}
                            </Typography>

                            <Checkbox
                                edge="end"
                                onChange={handleToggle(id)}
                                checked={complete}
                                className={classes.checkbox}
                            />

                            <IconButton aria-label="add to favorites" onClick={() => removeTodo(id, title)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="add to favorites" onClick={() => handleEditChange(id, title)}>
                                <EditIcon />
                            </IconButton>

                        </CardContent>
                    </Grid>
                    

                </Grid>
            </Card>



        );
    }

export default Todo;