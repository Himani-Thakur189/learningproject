import React from 'react';
import '../../App.css'
import Card_SearchResults from './Card_SearchResults';
const Results = [
  {
    labelname: 'ART',
    image: require('../../images/book1.jpg')
  },
  {
    labelname: 'ROMANCE',
    image: require('../../images/book2.jpg')
  },
  {
    labelname: 'ADVENTURE',
    image: require('../../images/book1.jpg')
  },
  {
    labelname: 'THRILLER',
    image: require('../../images/book2.jpg')
  },
  {
    labelname: 'CHILDREN`S',
    image: require('../../images/book1.jpg')
  },
  {
    labelname: 'ADULT',
    image: require('../../images/book2.jpg')
  },
  {
    labelname: 'HORROR',
    image: require('../../images/book1.jpg')
  },
  {
    labelname: 'LITERARY FICTION',
    image: require('../../images/book2.jpg')
  },
  {
    labelname: 'NURSING',
    image: require('../../images/book1.jpg')
  },
  {
    labelname: 'MUSIC',
    image: require('../../images/book2.jpg')
  },
  {
    labelname: 'LIFESTYLE',
    image: require('../../images/book1.jpg')
  },
  {
    labelname: 'MEDICINE',
    image: require('../../images/book2.jpg')
  }
]


const SearchResults = () => {
  return (<div>
    <h2 className='headingForSearch'>Search Results</h2>
    <div className='SearchResults'>
      {Results.map((item, index) => <Card_SearchResults key={index
      } image={item.image} name={item.labelname} author='Himani' />)}
    </div>
  </div>)
}
export default SearchResults;