import React, { Component } from 'react';
import Filter from '../components/subComponents/Filter'
import Grid from '@material-ui/core/Grid';
import SearchResults from '../components/subComponents/SearchResults';
import Card_SearchResults from '../components/subComponents/Card_SearchResults';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { searchResults } from '../Redux'
import { fetchDetails, fetchData } from '../Redux/Actions'
import { BrowserRouter as Router, useParams, useHistory, useRouteMatch, Switch, Route, Link } from 'react-router-dom'
import Description from './Description';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { useSelector } from 'react-redux'
import { database as firestore } from '../firebase'


const Results = [
  {
    labelname: 'Art',
    image: require('../images/book1.jpg'),
    author: 'Himani'
  },
  {
    labelname: 'Romance',
    image: require('../images/book2.jpg'),
    author: 'Himani'
  },
  {
    labelname: 'Adventure',
    image: require('../images/book1.jpg'),
    author: 'Himani'
  },
  {
    labelname: 'Thriller',
    image: require('../images/book2.jpg')
  },
  {
    labelname: 'CHILDREN`S',
    image: require('../images/book1.jpg')
  },
  {
    labelname: 'ADULT',
    image: require('../images/book2.jpg')
  },
  {
    labelname: 'HORROR',
    image: require('../images/book1.jpg')
  },
  {
    labelname: 'LITERARY FICTION',
    image: require('../images/book2.jpg')
  },
  {
    labelname: 'NURSING',
    image: require('../images/book1.jpg'),
    author: 'Himani'
  },
  {
    labelname: 'MUSIC',
    image: require('../images/book2.jpg')
  },
  {
    labelname: 'LIFESTYLE',
    image: require('../images/book1.jpg')
  },
  {
    labelname: 'MEDICINE',
    image: require('../images/home1.jpg')
  }


]
const Romance = (props) => {
  console.log('Results props', props.Results)
  let { id } = useParams();
  let history = useHistory();
  let { path, url } = useRouteMatch();
  console.log('heyyyygdfuwr0g8utq09', path)
  console.log('Results', props.Results)
  useEffect(() => {
    console.log('id', id)
    fetchDetails(`${id}`)
  }, [])
  return (<div style={{ marginTop: '67px' }}>
    <Grid container>
      <Grid item sm={3}>
        <Filter />
      </Grid>
      <Grid item sm={9}>

        <h2 className='headingForSearch'>Search Results</h2>
        <div className='SearchResults'>
          {Results.map((item, index) =>
            <div key={index}>
              <img src={item.image} width='70%' height='200px' onClick={() => history.push(`${url}/details`)}></img>
              <div>
                <h5 style={{ marginTop: '2px' }}>{item.labelname}</h5>
                <p style={{ position: 'relative', top: '-21px' }}>{item.author}</p>

              </div>
            </div>
          )}
        </div>
      </Grid>
    </Grid>


    <button>incremrnt</button>
    <h1>{props.counter}</h1>

  </div>

  );

}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    Results: state.firestore.ordered
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchDetails: (data) => dispatch(fetchDetails(data))
  }
}
// export default connect(mapStateToProps,mapDispatchToProps)( Romance)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(['Romance', 'Thriller'])
)(Romance)

