import React, { Component } from 'react';
import Input from '../stateless/Input'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
const Register = (props) => {
  const { register, handleRegisterLink, handleClickOpen } = props;
  console.log('props register ren', register)
  handleClickOpen();
  return (
    <div className="container">
      <form autoComplete='off' onSubmit={handleSubmit((values) => console.log('login', values))}>
        {/* <TextField
                className='loginStyle'
                id="email"
                helperText='Required'
                error
                label="Enter Email"
                onChange={(e) => setLoginArray({ ...loginArray, email: e.target.value })}
              />
              <TextField
                type="password"
                className='loginStyle'
                id="password"
                onChange={(e) => setLoginArray({ ...loginArray, password: e.target.value })} label="Password"
              /> */}
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
        />
        <a className='forgot' >Forgot Password?</a>
        <div>
          <Button
            size="large"
            variant="contained"
            className='loginButtonStyle'
            color='primary'
            type='submit'
            onClick={onLoginClick}
          >Login
                 </Button>
        </div>
      </form>

    </div>);
}


export default Register;