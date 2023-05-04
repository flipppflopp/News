import React, { useEffect, useState} from 'react';
import NewsList from '../Components/NewsList/NewsList';
import { connect } from 'react-redux'
import { Button } from '@mui/material';
import "./MainPage.css"
import "../Styles/Buttons.css"
import SearchArticles from '../Components/SearchArticles/SearchArticles';
import GetTenArticles from "../Requests/GetTenArticleRequest"
import CreateArticleModal from "../Components/CreateArticleModal/CreateArticleModal"

function MainPage(props) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if(props.news.length === 0){
      GetTenArticles(props)
    }
  }, [props]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  

  return (
    <div>
      <SearchArticles/>

      <NewsList newsList={props.news}/>

      <Button className="add_button simple_button" onClick={togglePopup}>+</Button>

      <CreateArticleModal  showPopup={showPopup} togglePopup={togglePopup}/>
      
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
