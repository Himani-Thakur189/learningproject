import React, { Component } from 'react';
import { storage } from '../firebase';
import { database } from '../firebase'
import AdminInput from '../components/stateless/AdminInput'
import '../App.css'
class Admin extends Component {
  state = {
    data: {
      name: '',
      author: '',
      publishIn: '',
      pages: '',
      description: '',
      pdfLink: '',
      ImageLink: '',
      category: ''
    },
    image: null,
    urlImage: '',
    pdf: '',
    urlPdf: ''

  }
  onImage = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }
  onpdf = (e) => {
    if (e.target.files[0]) {
      const pdf = e.target.files[0];
      this.setState(() => ({ pdf }));
    }
  }
  onhandleChange = (e) => {
    console.log('data valuw', e.target.value, e.target.id)
    const { data } = this.state
    data[e.target.id] = e.target.value
    this.setState({ data }, console.log('data', data))

  }

  handleClick = () => {
    const { category } = this.state.data
    const { image, pdf } = this.state
    const upload = storage.ref(`images/${category}/${image.name}`).put(image);
    upload.on('state_changed', (snapshot) => {
      //progress function 
    }, (err) => {
      console.log('errr', err)
    }, () => {
      storage.ref(`images/${category}`).child(image.name).getDownloadURL().then(url => {
        this.setState({ urlImage: url })
        console.log('url', url)
      }, () => console.log('iamge uploaded'))
    })
    const uploadpdf = storage.ref(`pdf/${pdf.name}`).put(pdf);
    uploadpdf.on('state_changed', (snapshot) => {
      //progress function 
    }, (err) => {
      console.log('errr', err)
    }, () => {
      storage.ref('pdf').child(pdf.name).getDownloadURL().then(url => {
        this.setState({ urlPdf: url }, () => { this.function() })
        console.log('url', url)
      })
    }
    )
  }

  function = () => {
    console.log('allll done')
    const { data } = this.state
    data['ImageLink'] = this.state.urlImage
    data['pdfLink'] = this.state.urlPdf
    this.setState({ data }, () => {
      database.collection(`${data.category}`).add({
        name: data.name,
        author: data.author,
        publishIn: data.publishIn,
        pages: data.pages,
        category: data.category,
        description: data.description,
        pdfLink: data.pdfLink,
        ImageLink: data.ImageLink
      })
      console.log('data saved')

    })
  }



  render() {
    return (<div>
      <div style={{ paddingTop: '100px', display: 'grid', justifyContent: 'center' }}>

        <AdminInput labelname='Book Name' id='name' onhandleChange={this.onhandleChange} type='text'></AdminInput>
        <AdminInput labelname='Author' id='author' onhandleChange={this.onhandleChange} type='text'></AdminInput>
        <AdminInput labelname='Publish In' id='publishIn' onhandleChange={this.onhandleChange} type='date'></AdminInput>
        <AdminInput labelname='No. of Pages' id='pages' onhandleChange={this.onhandleChange} type='number'></AdminInput>

        <div style={{ marginBottom: '20px' }}>
          <div><label>Description</label></div>
          <textarea type='text' id='description' onChange={(e) => this.onhandleChange(e)} maxLength='300' rows='6' style={{ width: '130%' }}></textarea>
        </div>

        <div style={{ marginBottom: '20px' }}><div>
          <label>Category</label></div>
          <select id='category' style={{ width: '133%' }}
            value={this.state.data.category} placeholder={'Select'} onChange={(e) => this.onhandleChange(e)}>
            <option>Select an option</option>
            <option value='Romance'>Romance</option>
            <option value='Thriller'>Thriller</option>
            <option value='Art'>Art</option>
            <option value='Adventure'>Adventure</option>
            <option value='Childrens'>Children</option>
            <option value='Adult'>Adult</option>
            <option value='Horror'>Horror</option>
            <option value='Literary Fiction'>Literary Fiction</option>
            <option value='Nursing'>Nursing</option>
            <option value='Music'>Music</option>
            <option value='Life Style'> Life Style</option>
            <option value='Medicine'>Medicine</option>
          </select>
        </div>

        <AdminInput labelname='Image' id='image' onhandleChange={this.onImage} type='file'></AdminInput>
        <AdminInput labelname='Pdf-File' id='pdf' onhandleChange={this.onpdf} type='file'></AdminInput>
        <button className='adminSubmit' onClick={this.handleClick}>Submit</button>

      </div>
    </div>);
  }
}

export default Admin;