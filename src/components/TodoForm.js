import React, { useState, useEffect } from "react";
import { API_URL } from '../config';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Checkbox, Box, InputLabel, Fab, FormControlLabel, FormGroup, TextField, Typography } from '@material-ui/core';

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
        width: '100%',
    },
    imagecard: {
        maxWidth: '100px',
        padding: '0px 24px 0px 0px',
    },
    hide: {
        display: 'none',
    },
    inputAddImageLabel: {
        margin: '0px 24px 0px 0px',
    },
    inputAddImageWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0px 0px 24px 0px',
    },
}));


function TodoForm(props) {

    //console.log(props);
    const classes = useStyles();

    // const [Id, setId] = useState(null);
    const [Id, setId] = useState(Math.floor(Math.random() * 10000));

    // Create input state
    const [inputTitle, setInputTitle] = useState("");
    const handleChangeTitle = (e) => {
        //console.log(e.target.value);
        setInputTitle(e.target.value);
    };

    const [inputDescription, setInputDescription] = useState("");
    const handleChangeDescription = (e) => {
        //console.log(e.target.value);
        setInputDescription(e.target.value);
    };

    const [inputComplete, setInputComplete] = useState(false);
    const handleChangeComplete = (e) => {
        //console.log(e.target.checked);
        setInputComplete(e.target.checked);
    };

    const today = new Date();

    const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [inputDueDate, setInputDueDate] = useState(dateToday);

    const handleChangeDueDate = (e) => {
        setInputDueDate(e.target.value);
    };

    const [errorFetch, setErrorFetch] = useState(false);

    const [imagePath, setImagePath] = useState('');

    const handleChangeImage = (e) => {

        const errs = []
        const files = Array.from(e.target.files);

        const formData = new FormData();
        const types = ['image/png', 'image/jpeg', 'image/gif'];
        const tmpArray = [];

        files.forEach((file, i) => {

            if (types.every(type => file.type !== type)) {
                errs.push(`'${file.type}' is not a supported format`)
            }

            if (file.size > 150000) {
                errs.push(`'${file.name}' is too large, please pick a smaller file`)
            }

            formData.append(i, file);
            tmpArray.push(file);
        })

        fetch(`${API_URL}/image-upload`, {
            method: 'POST',
            body: formData
        })
            .then(res => {
                if (!res.ok) {
                    throw res
                }
                return res.json()
            })
            .then(inputImages => {
                setImagePath(inputImages[0].secure_url);
            })
            .catch(err => {

            })
    };

    useEffect(() => {

        if (props.editId == null) {

        } else {

            const result = props.todos.filter(todo => todo.id === props.editId);

            setId(result[0].id);
            setInputTitle(result[0].title);
            setInputDueDate(result[0].dueDate);
            setInputDescription(result[0].description);
            setInputComplete(result[0].complete);
            setImagePath(result[0].imagePath);
            setImageNew(false);

        }

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.editId == null) {

            props.onSubmit({
                id: Id,
                title: inputTitle,
                description: inputDescription,
                dueDate: inputDueDate,
                complete: inputComplete,
                imagePath: imagePath
            });
            setInputTitle("");
            setInputDescription("");
            setInputDueDate(null);
            setInputComplete([0]);
            setImagePath('');

            props.onClose();

        } else {
            props.editTodo(Id, inputTitle, inputDescription, inputDueDate, inputComplete, imagePath);
            props.setEdit();
            props.onClose();
        }

    };

    const [imageNew, setImageNew] = useState(true);

    // const About = (props) => {
    const UploadImageCtaText = e => {

        if (imageNew) {
            return (
                <span>
                    Upload Image
                </span>
            );
        } else {
            return (
                <span>
                    Change Image
                </span>
            );
        }
    }

    return (
        <React.Fragment >
            <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
                <Typography variant='h3'>
                    Add Todo Form
                </Typography>
                <FormGroup>
                    <InputLabel htmlFor="input-title">Title</InputLabel>
                    <TextField
                        id="input-title"
                        placeholder="Title"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={inputTitle}
                        onChange={handleChangeTitle}
                    />
                    <InputLabel htmlFor="input-description">Description</InputLabel>
                    <TextField
                        id="input-description"
                        fullWidth
                        margin="normal"
                        multiline={true}
                        onChange={handleChangeDescription}
                        placeholder="Description"
                        rows={3}
                        value={inputDescription}
                        variant="outlined"
                    />
                    <InputLabel htmlFor="input-due-date">Due Date</InputLabel>
                    <TextField
                        id="input-due-date"

                        type="date"
                        margin="normal"
                        onChange={handleChangeDueDate}
                        value={inputDueDate}
                    />
                    <FormControlLabel
                        value="complete"
                        control={<Checkbox onChange={handleChangeComplete} color="primary" checked={inputComplete} />}
                        label="Complete"
                        labelPlacement="start"
                    />
                    <Box className={classes.inputAddImageWrapper}>
                        <img
                            src={imagePath}
                            alt=''
                            className={clsx(classes.imagecard)}

                        />
                        <InputLabel htmlFor='icon-button-file' className={clsx(classes.inputAddImageLabel, false && classes.hide)} >
                            <Fab
                                color="secondary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                            >
                                <AddIcon /> <UploadImageCtaText />
                            </Fab>
                        </InputLabel>
                        <Button
                            variant="contained" color="primary"
                            onClick={() => props.removeImage(Id)}
                            className={clsx(classes.delete, true && classes.hide)}
                            className={clsx(imageNew && classes.hide)}
                        >Remove image</Button>
                        <Typography variant="body1" className={clsx(!errorFetch && classes.hide)}>Failed to fetch. This propvbaly means the dev server is not running. See Read me</Typography>
                        <input
                            style={{ display: "none" }}
                            color="primary"
                            accept="image/*"
                            type="file"
                            onChange={handleChangeImage}
                            id="icon-button-file"
                            margin="normal"

                            variant="outlined"
                        />
                    </Box>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>add todo</Button>
                </FormGroup>
            </form>
        </React.Fragment>
    );
}

export default TodoForm;
