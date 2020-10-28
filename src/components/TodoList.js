import React, { useState, useEffect } from "react";
import { API_URL } from '../config';
import TodoForm from "./TodoForm";
import Todo from './Todo';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, Container, Box, Button, Modal, Backdrop, Fade, Typography } from '@material-ui/core';

// cloud name dg8ckygz0
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        minWidth: 600,
        // margin: '0px!important',
        border: '2px solid red',
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

function TodoList() {
    console.log('function TodoList() {');

    const classes = useStyles();

    // useState hooks
    const [checked, setChecked] = React.useState([1]);
    const [todos, setTodos] = useState([]);
    const [todosEmptyBool, setTodosEmptyBool] = useState(true);

    const [todosSelected, setTodosSelected] = useState([]);
    //Track is edit clicked or not
    const [editId, setEdit] = useState(null);

    const [inputValue, setInputValue] = useState("");

    // Set localStorage on initial mount
    useEffect(() => {
        // // console.log("use effect one");

        const todos = JSON.parse(localStorage.getItem('todos-omni-dev1'));
        if (todos) {
            setTodos(todos);
            // setTodosEmptyBool(true);
        }
        
    }, []);

    // update localStorage on data change
    useEffect(() => {
        console.log("use effect two");
        // // console.log(todos.length);

        localStorage.setItem('todos-omni-dev1', JSON.stringify(todos));

        if (todos.length == 0) {
            console.log('if (todos.length == 0) {');
            setTodosEmptyBool(false);
        }  

    }, [todos]);

    // // console.log(todos);

    const [dev, setDev] = React.useState(true);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        // // console.log("const handleOpen = () => {");

        // // console.log(editId);
        setOpen(true);
    };

    const handleClose = () => {
        // // console.log("const handleClose = () => {");
        setOpen(false);
        setEdit(null);
    };

    // clsx experiment button
    const [openClsx, setOpenClsx] = React.useState(false);

    const handleOpenClsx = () => {
        // // console.log("const handleOpenClsx = () => {");
        setOpenClsx(!openClsx);
    };

    const handleToggle = (value) => () => {

        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        completeTodo(value);
        setChecked(newChecked);
    };

    const handleEditChange = (id, text) => {
        // console.log("handle edit channngge");

        setEdit(id);
        setInputValue(text);
        handleOpen();
    };

    const addTodo = (todo) => {
        if (!todo.title || /^\s*$/.test(todo.title)) {
            return;
        }

        // // console.log(todos.length);
        if (todos.length == 0) {
            setTodosEmptyBool(!todosEmptyBool);
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);

    };

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todoId) => todoId.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = (id) => {
        // // console.log("completeTodo");
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const editTodo = (id, title, description, dueDate, complete, imagePath) => {
        // console.log("const editTodo = (id, title, description, dueDate, complete) => {");

        let editTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.title = title;
                todo.description = description;
                todo.dueDate = dueDate;
                todo.complete = complete;
                todo.imagePath = imagePath;
            }
            return todo;
        });
        setTodos(editTodos);
        setEdit(false);
    };


    const { foo, bar, baz } = classes;
    const style = clsx(foo, bar, baz);

    const [errorFetch, setErrorFetch] = useState(false);

    const formData = new FormData();

    fetch(`${API_URL}/image-upload`, {
        method: 'POST',
        body: formData
    })
        .then(res => {
            // console.log('objec.then(res => {');
            // console.log(res.json);

            if (!res.ok) {
                throw res
            }
            //// console.log(res.json);
            return res.json()
        })
        .then(inputImages => {
            // console.log('.then(inputImages => {');
            // console.log(inputImages);
            // console.log(inputImages[0].secure_url);

            // setInputUploading(false);
            // setInputImages(inputImages);
            // setImagePath(inputImages[0].secure_url);


        })
        .catch(err => {
            // console.log('.catch(err => {');
            console.dir(err.message);

            setErrorFetch(true);


            // err.json().then(e => {
            //     // this.toast(e.message, 'custom', 2000, toastColor);
            //     // setInputUploading(true);
            //     // this.setState({ uploading: false })
            // })
        })

    return (
        <React.Fragment>



            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.modal}>
                        <TodoForm onClose={handleClose} onSubmit={addTodo} todos={todos} editId={editId} editTodo={editTodo} setEdit={setEdit} />
                    </div>
                </Fade>
            </Modal>

            <Grid container spacing={3} className={classes.boxContainer}>

                <Grid item xs={12} className={classes.grid}>
                    <Box className={classes.box}>
                        <Typography variant="h3">Todo App</Typography>
                        <Typography variant="h5" className={clsx(!errorFetch && classes.hide)} gutterBottom>For this Todo List App to work you have to install and then run the dev server that can be found in the root of project.
                        </Typography>
                        <Typography variant="h5" className={clsx(!errorFetch && classes.hide)} gutterBottom>This is because my solution involved the idea that the easiest way to get started with storing images would be to have a third party host the images and I just use a string url reference to that image to display it in the application. I went down the path of hosting uploaded images to cloudinary.com a free hosting service that I discovered.
                        </Typography>
                        <Typography variant="h5" className={clsx(!errorFetch && classes.hide)} gutterBottom>Cloudinary seemed to be a good service that provides a certain amount of storage and transfer on their free plan. So I signed up and got necessary api keys that have been put into a .env file on the dev server.
                        </Typography>
                        <Typography variant="h5" className={clsx(!errorFetch && classes.hide)} gutterBottom>
                        The Instructions have been included in the README.md file that you will have seen on gitHub. But because you are seeing this message it means the dev server has not started succesfully for some reason. So I can help by pointing you back to the README.md file on gitHub which explains the process of getting the dev server running succesfully.
                        </Typography>
                        <Typography variant="h5" className={clsx(!errorFetch && classes.hide)} gutterBottom>
                            I'm sure there is a simpler way to implement the this functionality, that does not involve having to set up a server in this way? But once I had started I did continue with this solution. I hope that is ok.
                        </Typography>
                        <Typography variant="h5" className={clsx(!errorFetch && classes.hide)} gutterBottom>Once the dev server is running you will not see this message again and the 'CREATE TODO' button below will activate. Full instructions can be found on the README.md file in github repo.
                        </Typography>
                        
                        <Typography variant="h5" gutterBottom>
                            Click the 'CREATE TODO' button below to add todo item.
                        </Typography>
                    </Box>
                </Grid>


                <Grid item xs={12}>
                    <Box className={classes.box}>

                        <Button variant="contained" color="primary" onClick={handleOpen} disabled={errorFetch}>
                            Create Todo
                        </Button>

                    </Box>
                </Grid>

                <Grid item xs={12}>


                    {todos.map((todo, index) => {

                        return (

                            <Todo
                                key={index}
                                id={todo.id}
                                title={todo.title}
                                description={todo.description}
                                dueDate={todo.dueDate}
                                complete={todo.complete}
                                imagePath={todo.imagePath}
                                handleToggle={(e) => handleToggle(e)}
                                checked={checked}
                                todos={todosSelected}
                                setTodos={setTodos}
                                completeTodo={completeTodo}
                                removeTodo={removeTodo}
                                editTodo={editTodo}
                                handleEditChange={handleEditChange}
                                editId={editId}
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                            />

                        );
                    })}
                </Grid>

            </Grid>

        </React.Fragment>

    );
}

export default TodoList;