import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const useStylesAddBtn = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: "fixed",
    zIndex: 2,
    marginLeft: "93%",
    float: "right"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const useStylesInput = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const useStylesSaveBtn = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const useStylesCancelBtn = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function AddPost(props) {

  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const [values, setValues] = useState({
    title: '',
    shortDescription: '',
    description: '',
    category: '',
    url: ''
  });


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categories = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Travel',
      label: 'Travel',
    },
    {
      value: 'Lifestyle',
      label: 'Lifestyle',
    },
    {
      value: 'Business',
      label: 'Business',
    },
    {
      value: 'Food',
      label: 'Food',
    },
    {
      value: 'Work',
      label: 'Work',
    },
  ];

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleAddPost(values);


    // props.handleText(state    //props.history.push('/Post')
  }

  


  const classes = useStyles();

  const classesAddBtn = useStylesAddBtn();

  const classesInput = useStylesInput();

  const classesSaveBtn = useStylesSaveBtn();

  const classesCancelBtn = useStylesCancelBtn();



  return (
    <div>
      <Button onClick={handleOpen}>
        <Fab color="secondary" aria-label="Edit" className={classesAddBtn.fab}>
          <Icon>edit_icon</Icon>
        </Fab>
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={(event) => handleSubmit(event)} className={classesInput.container} noValidate autoComplete="off">
            <p>Create Post</p>
            <TextField
            required
            id="standard-required"
            label="Title"
            name="title"
            defaultValue=""
            value={props.title}
            onChange={handleChange('title')}
            className={classesInput.textField}
            margin="normal"
            />
            <TextField
              required
              id="standard-required"
              label="Short Description"
              name="shortDescription"
              defaultValue=""
              value={props.shortDescription}
              onChange={handleChange('shortDescription')}
              className={classesInput.textField}
              margin="normal"
            />
            <TextField
              required
              id="standard-required"
              label="Description"
              name="description"
              defaultValue=""
              value={props.description}
              onChange={handleChange('description')}
              className={classesInput.textField}
              margin="normal"
            />
            <TextField
              id="standard-select-currency"
              select
              label="Category"
              className={classesInput.textField}
              value={values.categories}
              onChange={handleChange('category')}
              SelectProps={{
                MenuProps: {
                  className: classesInput.menu,
                },
              }}
              margin="normal"
            >
              {categories.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="standard-required"
              label="Image URL"
              defaultValue=""
              name="image"
              value="https://source.unsplash.com/random"
              onChange={handleChange('image')}
              className={classesInput.textField}
              margin="normal"
            />
            <Button color="primary" className={classesCancelBtn.button} onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" className={classesSaveBtn.button} onClick={handleSubmit}>
              Save
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default AddPost;