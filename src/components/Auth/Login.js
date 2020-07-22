import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core'
import courier from '../../images/courier.png'
import { RemoveRedEye } from '@material-ui/icons';
import { Field, reduxForm } from 'redux-form'
import firebase from '../../firebase'
import '../../App.css'
import './style.css'
import { red } from '@material-ui/core/colors';
const styles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2, 0, 0),
    paddingTop: '0px !important',
    display: 'flex'
  },
}))(MuiDialogContent);


const validate = values => {
  let errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!!values.email) {
    if (!!(values.email.trim().length)) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    }
    else {
      errors.email = 'Required'
    }
  }


  if (!values.password) {
    errors.password = 'Required'
  } else if (!!values.password) {
    if (!!(values.password.trim().length)) {
      if (! /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(values.password)) {
        errors.password = 'Password must be atleast one uppercase, one lowercase and of 6 digits'
      }
      if (values.password.length > 8) {
        errors.password = 'Password cant be more than 8 digits'
      }
    } else { errors.password = 'Required' }
  }
  return errors
}
const renderTextField = ({
  style,
  input,
  label,
  meta: { touched, error },
  ...custom

}) => (
    <TextField
      error={touched && error}
      label={label}
      floatingLabelText={label}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

function Login({ open, handleClickOpen, handleSubmit, error, signup }) {
  // const {open,handleClickOpen}=props;
  const [register, setRegister] = React.useState(false);
  const [loginBtn, setloginBtn] = React.useState(false)
  const [login_message, setLoginMessage] = React.useState('')
  const [register_message, setRegisterMessage] = React.useState('')
  const [loginArray, setLoginArray] = React.useState({ email: '', password: '' })
  const [inValid, changeinValid] = React.useState({})
  const [passwordIsMasked, setpasswordIsMarked] = React.useState(true)
  const classes = styles();

  const handleRegisterLink = (email, password) => {
    setRegister(!register)

  }


  const onAccountCreate = (values) => {
    console.log('va;ues in account', values)
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then((msg) => {
        console.log('msg', msg)
        setRegisterMessage('User Successfully Registered!!')

      })
      .catch((e) => {
        console.log('e', e)
        setRegisterMessage(e.message)
      })
  }
  const onLoginClick = () => {
    if (validateLogin()) {
      console.log('validate', inValid)
      firebase.auth().signInWithEmailAndPassword(loginArray.email, loginArray.password).then((msg) => {
        console.log('msg', msg)
        setLoginMessage('Login Successfull!!')
      })
        .catch((e) => {
          console.log('e', e)
          setLoginMessage(e.message)
        })
    }
  }

  const validateLogin = () => {
    let invalid = false;
    let error = {};
    if (!(loginArray.email)) {
      invalid = true;
      error.email = true;
    } else if (!(loginArray.email.trim())) {
      invalid = true;
      error.email = true;
    }
    if (!(loginArray.password)) {
      invalid = true;
      error.password = true;
    } else if (!(loginArray.password.trim())) {
      invalid = true;
      error.password = true;
    }
    changeinValid(error);
    return !invalid;
  }

  console.log('props', loginArray)
  return (<div>
    <Dialog aria-labelledby="customized-dialog-title" onClose={handleClickOpen} open={open}>
      {register ?
        //Register 
        <DialogContent >
          <div className='leftRegister' >
            <h3 className='registerheading'>Create an Free Acoount to access our Library</h3>
          </div>
          <div className='rightRegister'>
            <p className='message'>{register_message}</p>
            <IconButton aria-label="close" style={{ color: 'black' }} className={classes.closeButton} onClick={handleClickOpen}>
              <CloseIcon />
            </IconButton>
            <form onSubmit={handleSubmit((values) => onAccountCreate(values))}>
              <Field
                name="email"
                component={renderTextField}
                label="Email"
                className='loginStyle'
                id='email'
                style={classes.floatingLabelFocusStyle}
              />
              <Field
                name="password"
                component={renderTextField}
                label="Password"
                className='loginStyle'
                id='password'
                type='password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <RemoveRedEye
                        style={{ cursor: 'pointer' }}
                        onClick={() => setpasswordIsMarked(!passwordIsMasked)}
                      />
                    </InputAdornment>)
                }}
              />
              <Button
                size="large"
                variant="contained"
                className='loginButtonStyle'
                onClick={onAccountCreate}
                color='primary'
                type='submit'>
                Create an Account
                </Button>
            </form>

            <div className='or'>OR</div>
            <Button size="large" variant="contained" className='loginButtonStyle' onClick={handleRegisterLink} color='primary'>Login</Button>
          </div>

        </DialogContent> :


        //Login
        <DialogContent >
          <div className='left' >
            <img className='courier' src={courier} width='80%'></img>
            <div style={{ marginLeft: '33px' }}>
              <h1 style={{ color: 'white', fontWeight: '400' }}>Login</h1>
              <p style={{ color: 'white' }}>Get access to your orders WishList and Recommendations</p>
            </div>
          </div>
          <div className='right'>
            <p className='message'>{login_message}</p>
            <IconButton aria-label="close" style={{ color: 'black' }} className={classes.closeButton} onClick={handleClickOpen}>
              <CloseIcon />
            </IconButton>
            <form autoComplete='off' onSubmit={handleSubmit((values) => console.log('login', values))}>
              <TextField
                error={inValid.email}
                className='loginStyle'
                id="email"
                label="Enter Email"
                helperText={inValid.email && 'Email cant be empty'}
                onChange={(e) => {
                  setLoginArray({ ...loginArray, email: e.target.value })
                  changeinValid({ ...inValid, email: false })
                }}
              />
              <TextField
                error={inValid.password}
                type={passwordIsMasked ? 'password' : 'text'}
                className='loginStyle'
                id="password"
                helperText={inValid.password && 'Password cant be empty'}
                onChange={(e) => {
                  setLoginArray({ ...loginArray, password: e.target.value })
                  changeinValid({ ...inValid, password: false })
                }}
                label="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <RemoveRedEye
                        style={{ cursor: 'pointer' }}
                        onClick={() => setpasswordIsMarked(!passwordIsMasked)}
                      />
                    </InputAdornment>)
                }}
              />

              <a className='forgot' >Forgot Password?</a>
              <div>
                <Button
                  size="large"
                  variant="contained"
                  className='loginButtonStyle'
                  color='primary'
                  onClick={onLoginClick}
                >Login
                 </Button>
              </div>
            </form>
            <a className='registerLink' onClick={handleRegisterLink}>New to EBuy?Create an Account</a>

          </div>
        </DialogContent>}
    </Dialog>
  </div>);
}


export default reduxForm({
  form: 'AuthForm',
  validate
})(Login)