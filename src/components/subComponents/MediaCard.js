import React, { Component } from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, withRouter } from "react-router-dom";
const styles = makeStyles((theme) => ({
  btn: {
    width: '95%',
    borderRadius: '0px',
    marginTop: '-4px',
    backgroundColor: '#e25e2b',
    '&:hover': {
      backgroundColor: 'black',
    }
  }
}))

const MediaCard = (props) => {
  const classes = styles();
  console.log('mediacard', props)
  const history = useHistory();
  return (
    <div className='card'>
      <img className='img' src={props.image} width='95%' ></img>
      <Button size="large"
        style={{ color: 'white' }}
        onClick={() => history.push(`SearchResults/${props.labelname}`)}
        className={classes.btn} variant="contained">{props.labelname}</Button>
    </div>
  )
}
export default MediaCard;