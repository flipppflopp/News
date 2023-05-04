import React, { useState} from 'react';
import { Button } from '@mui/material';
import Modal from 'react-modal';
import { connect } from 'react-redux'
import TextField from '@mui/material/TextField';

function CreateArticleModal(props) {
    const [titleValue, setTitleValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [imageValue, setImageValue] = useState('');
  
    
    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };

    const handleDescChange = (event) => {
        setDescValue(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthorValue(event.target.value);
    };

    const handleImageChange = (event) => {
        setImageValue(event.target.value);
    };

    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();

        var updatedNews = [...props.news];
        updatedNews.unshift({
          title: titleValue,
          description: descValue,
          author: authorValue,
          urlToImage: imageValue,
          createdByUser: true
        });
        props.setNews(updatedNews);

        props.togglePopup();
      };

    return (    
    <Modal
        isOpen={props.showPopup}
        onRequestClose={props.togglePopup}
        contentLabel="Example Modal">
          <form onSubmit={handleSubmit}>
            <h1>Add new article</h1>
            
            <h3>Enter title:</h3>
            <TextField rows={2} required id="title" value={titleValue} onChange={handleTitleChange}/>

            <h3>Enter description:</h3>
            <TextField required id="description" value={descValue} onChange={handleDescChange} />

            <h3>Enter author:</h3>
            <TextField required id="author" value={authorValue} onChange={handleAuthorChange} />

            <h3>Enter image:</h3>
            <TextField required id="image" value={imageValue} onChange={handleImageChange} />

            

            <Button className='simple_button' type="submit">Submit</Button>
            <Button className='simple_button' onClick={props.togglePopup}>Сancel</Button>
          </form>
      </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
      news: state.news,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setNews: (news) => dispatch({ type: 'SET_NEWS', payload: news }),
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticleModal);