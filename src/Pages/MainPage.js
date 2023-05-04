import React, { useEffect, useState} from 'react';
import axios from 'axios';
import API_KEY from "../configs/api_config"
import NewsList from '../Components/NewsList/NewsList';
import { connect } from 'react-redux'
import { Button } from '@mui/material';
import "./MainPage.css"
import Modal from 'react-modal';
import "../Styles/Buttons.css"
import SearchArticles from '../Components/SearchArticles/SearchArticles';
import GetTenArticles from "../Requests/GetTenArticleRequest"

function MainPage(props) {
  const [showPopup, setShowPopup] = useState(false);

  const [titleValue, setTitleValue] = useState('');
  const [descValue, setDescValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');
  const [imageValue, setImageValue] = useState('');

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  useEffect(() => {
    if(props.news.length === 0){
      GetTenArticles(props)
    }
  }, [props]);


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

    togglePopup();
  };

  return (
    <div>
      <SearchArticles/>

      <NewsList newsList={props.news}/>

      <Button className="add_button simple_button" onClick={togglePopup}>+</Button>

      <Modal
        isOpen={showPopup}
        onRequestClose={togglePopup}
        contentLabel="Example Modal">
          <form onSubmit={handleSubmit}>
            <h1>Add new article</h1>
            
            <h3>Enter title:</h3>
            <input type="text" value={titleValue} onChange={handleTitleChange} />

            <h3>Enter description:</h3>
            <input type="text" value={descValue} onChange={handleDescChange} />

            <h3>Enter author:</h3>
            <input type="text" value={authorValue} onChange={handleAuthorChange} />

            <h3>Enter image:</h3>
            <input type="text" value={imageValue} onChange={handleImageChange} />

            <p></p>

            <Button className='simple_button' type="submit">Submit</Button>
            <Button className='simple_button' onClick={togglePopup}>Сancel</Button>
          </form>
      </Modal>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
