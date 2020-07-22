import React, { Component } from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import Button from '@material-ui/core/Button';
import '../../App.css'
const Filter = () => {
  return (<div>
    <div style={{ backgroundColor: '#f7f5f5', margin: '20px' }}>
      <div className='rating'>
        <h5 style={{ marginLeft: '34px', marginBottom: '15px', paddingTop: '15px' }}>FILTERS</h5>
        <div style={{ position: 'relative' }}>
          <input type='checkbox' className='input' />
          <div className='subIcons'>
            <StarRateIcon ></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }} ></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <input type='checkbox' className='input' />
          <div className='subIcons'>
            <StarRateIcon></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <input type='checkbox' className='input' />
          <div className='subIcons'>
            <StarRateIcon ></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <input type='checkbox' className='input' />
          <div className='subIcons'>
            <StarRateIcon ></StarRateIcon>
            <StarRateIcon style={{ marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <input type='checkbox' className='input' />
          <div className='subIcons'>
            <StarRateIcon ></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
            <StarRateIcon style={{ color: '#e6e0e0', marginLeft: '-5px' }}></StarRateIcon>
          </div>
        </div>
      </div>
      <div className='genres'>
        <h5 style={{ marginLeft: '34px' }}>GENRES</h5>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Adventure</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Music</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Action </label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Art</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Thriller</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Music</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Law</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
        <div style={{ position: 'relative', marginBottom: '4px' }}>
          <input type='checkbox' className='input' />
          <label style={{ position: 'absolute', left: '58px' }}>Romance</label>
        </div>
      </div>
      <Button size='large' style={{
        backgroundColor: 'black', width: '84%',
        backgroundColor: '#e25e2b',
        margin: '19px',
        color: 'white'
      }} >APPLY</Button>
    </div>
  </div>)
}
export default Filter;