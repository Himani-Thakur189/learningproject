import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import cartIcon from '../../images/cartIcon.png'
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import '../../App.css'
import Login from '../Auth/Login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    //   marginRight:theme.spacing(85),
    marginRight: theme.spacing(85),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
      width: 'auto',
    },
    width: '30%'
  }, inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100ch'
    },
  },
  list: {
    padding: theme.spacing(4, 0, 0, 0)
  },
  paper: {
    height: 'calc(100% - 60%)',
    top: 64
  }
}));

function Header() {
  const [state, setState] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(!open)
    console.log('state open', open)
  }
  const toggleDrawer = () => {
    setState(!state)
  }
  const list = () => (
    <List className={classes.list}>
      {['Notification Preferences', 'Sell on Easy Buy', '24*7 Customer Care', 'Advertise'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />

        </ListItem>
      ))}
    </List>
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: '#e25e2b' }}>
        <Toolbar>
          <IconButton edge="start"
            className={classes.menuButton} color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}>
            <MenuIcon />
            <Drawer anchor='left' classes={{ paper: classes.paper }}
              open={state} onClose={toggleDrawer}>
              {list()}
            </Drawer>
          </IconButton>
          <Typography className={classes.title} variant="h6">
            EBuy
                    </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search by keyword....(title,author)"
              className={classes.inputInput}
            />
          </div>
          <img src={cartIcon} width='25px' style={{ color: 'white' }} />
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          {open ? <Login open={open} handleClickOpen={handleClickOpen} /> : null}
        </Toolbar>
      </AppBar>
      {/* <div className='productlist'>
              <Button>Electronics</Button>
              <Button>Women</Button>
              <Button>House&Furniture </Button>
              <Button>TVs&Appliances</Button>
              <Button>Men</Button>
              <Button>Baby&kids</Button>
              <Button>Sports, Books&More</Button>
              <Button>Offer Zone</Button>
            </div> */}
    </div>);
}

export default Header;