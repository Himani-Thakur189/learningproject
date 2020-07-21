import React  from 'react';
import Carousel from 'react-material-ui-carousel'
import '../App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory,withRouter} from "react-router-dom";
import MediaCard from '../subComponents/MediaCard'
import '../App.css'

const styles=makeStyles((theme)=>({
  btn:{
    width: '95%',
    borderRadius: '0px',
    marginTop: '-4px',
    backgroundColor:'#e25e2b',
    '&:hover': {
      backgroundColor: 'black',
    }
  }
}))
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//        padding: theme.spacing(2),
//       // textAlign: 'left',
//       // color: theme.palette.text.secondary,
//     },
//   }));
  const Images=[
    {
      image:require('../../images/home.png')
    },
    {
      image:require('../../images/home1.jpg')
    }
  ]
  const genres=[
    {
      labelname:'Art',
      image:require('../../images/book1.jpg')
    },
    {
      labelname:'Romance',
      image:require('../../images/book2.jpg')
    },
    {
      labelname:'Adventure',
      image:require('../../images/book1.jpg')
    },
    {
      labelname:'Thriller',
      image:require('../../images/book2.jpg')
    },
    {
      labelname:'CHILDREN`S',
      image:require('../../images/book1.jpg')
    },
    {
      labelname:'ADULT',
      image:require('../../images/book2.jpg')
    },
    {
      labelname:'HORROR',
      image:require('../../images/book1.jpg')
    },
    {
      labelname:'LITERARY FICTION',
      image:require('../../images/book2.jpg')
    },
    {
      labelname:'NURSING',
      image:require('../../images/book1.jpg')
    },
    {
      labelname:'MUSIC',
      image:require('../../images/book2.jpg')
    },
    {
      labelname:'LIFESTYLE',
      image:require('../../images/book1.jpg')
    },
    {
      labelname:'MEDICINE',
      image:require('../../images/home1.jpg')
    }


  ]
  const Item=(props)=>(
    <img src={props.item.image} height='600px' width='100%'></img>
  )
const Home=(props)=>{
  const history=useHistory();
  const classes=styles();
    return ( <div>
                  <Carousel>
                    {
                      Images.map((item,index)=><Item key ={index} item={item}/>)
                    }
                  </Carousel>
                  <h3 style={{marginLeft: '12vw'}}>BROWSE GENRES</h3>
                  <div className='genre'>
                    {/* {genres.map(item=><MediaCard image={item.image} labelname={item.labelname}/>)} */}
                    {genres.map((item,index)=><><div className='card' key ={index}>
                          <img className='img' src={item.image} width='95%' ></img>
                          <Button size="large" 
                          style={{color:'white'}}
                          onClick={()=>history.push(`/${item.labelname}`)}
                          className={classes.btn} variant="contained">{item.labelname}</Button>
                        </div></>)}
                  </div>
            </div>
              )
}


export default Home;