import React  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import courier from '../../images/courier.png'
// import {signup} from '../../Redux/Actions'
import axios from 'axios';
import {connect} from 'react-redux';
import firebase from '../firebase'
import '../App.css'
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
          padding: theme.spacing(0,2,0,0),
          paddingTop:'0px !important',
          display:'flex'
        },
      }))(MuiDialogContent);

      
function Login({open,handleClickOpen,error,signup}) {
  // const {open,handleClickOpen}=props;
  const [register,setRegister]=React.useState(false);
  const [cont,setCont]=React.useState(false) 
  const [registerArray,setRegisterArray]=React.useState({email:'',password:''})
  const [logout,setLogout]=React.useState(false)
  const [loginArray,setLoginArray]=React.useState({email:'',password:''})
  const classes=styles();
  const handleContinue=()=>{
    setCont(true)
  }
  const handleRegisterLink=(email,password)=>{
        setRegister(!register)
           
  }

  // const handleChange=(e)=>{
  //  console.log('regiswd',registerArray,e.target.id)
  //  const {value}=e.target
  //  setRegisterArray({...registerArray,[e.target.id]:value})
  // }
  

  const onAccountCreate=()=>{
  // axios.post('http://localhost:3000/createAccount',registerArray)
  // .then((res)=>{
  //   console.log('res',res)
  //   setLogout(!logout)
  // })
  //  .catch((e)=>{
  //   console.log('error',e)
  // })
 console.log('account',registerArray.email)
  firebase.auth().createUserWithEmailAndPassword(registerArray.email,registerArray.password)
  .then((msg)=>{
    console.log('msg',msg)
    firebase.SendEmailVerfication().then((msg)=>console.log('done',msg))
  })
  .catch((e)=>console.log('e',e))
 
  }
  const onLoginClick=()=>{
   firebase.auth().signInWithEmailAndPassword(loginArray.email,loginArray.password).then((msg)=>console.log('msg',msg))
   .catch((e)=>console.log('e',e))
  }

console.log('props',loginArray)
return (<div>
      <Dialog  aria-labelledby="customized-dialog-title" onClose={handleClickOpen} open={open}>
       {register?
      //Register
       <DialogContent >
          <div className='leftRegister' >
           <h3 className='registerheading'>Create an Free Acoount to access our Library</h3>
          </div>
          <div className='rightRegister'>
          <IconButton aria-label="close" style={{color:'black'}} className={classes.closeButton} onClick={handleClickOpen}>
              <CloseIcon />
            </IconButton>
          {cont?
          <><TextField  type="password" className='loginStyle' id="password" label="Password"  value={registerArray.password} onChange={(e)=>setRegisterArray({...registerArray,password:e.target.value})} />
          <Button size="large" variant="contained" className='loginButtonStyle' onClick={onAccountCreate} color='primary'>Create an Account</Button>
          </>
          :
          <>
          <TextField  className='loginStyle'id="email" label="Enter Email"  value={registerArray.email} onChange={(e)=>setRegisterArray({...registerArray,email:e.target.value})}/>
          <Button size="large" variant="contained" className='loginButtonStyle'onClick={handleContinue} color='primary'>Contniue</Button>
           </>
          }
          <div className='or'>OR</div>
          <Button size="large" variant="contained" className='loginButtonStyle' color='primary'>Login</Button>
         </div>
         
       </DialogContent> :

       
       //Login
       <DialogContent >
          <div className='left' >
            <img className='courier' src={courier} width='80%'></img>
            <div style={{marginLeft:'33px'}}>
            <h1 style={{color: 'white', fontWeight: '400'}}>Login</h1>
            <p style={{color:'white'}}>Get access to your orders WishList and Recommendations</p>
            </div>
          </div>
          <div className='right'>
            <IconButton aria-label="close" style={{color:'black'}} className={classes.closeButton} onClick={handleClickOpen}>
              <CloseIcon />
            </IconButton>
            <form autoComplete='off' >
              <TextField className='loginStyle' id="email" label="Enter Email" onChange={(e)=>setLoginArray({...loginArray,email:e.target.value})}/>
              <TextField  type="password" className='loginStyle' id="password" onChange={(e)=>setLoginArray({...loginArray,password:e.target.value})} label="Password" />
              <a className='forgot' >Forgot Password?</a>
              <div><Button size="large" variant="contained" className='loginButtonStyle' color='primary' onClick={onLoginClick}>Login</Button></div>
            </form>
            <a className='registerLink' onClick={handleRegisterLink}>New to EBuy?Create an Account</a>
            
            </div>
          </DialogContent>}
      </Dialog>
    </div>);
}
 
// const mapDispatchtoProps=(dispatch)=>{
// return{
//   signup:(email,password)=>dispatch(signup(email,password))
// }
// }
// const mapStateToProps=(state)=>{
// console.log('state',state.error)
// return{
//     error:state.error
// }
// }
// export default connect(mapStateToProps,mapDispatchtoProps)(Login);
export default Login