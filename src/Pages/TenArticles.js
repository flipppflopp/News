import NewsList from '../Components/NewsList/NewsList';
import { connect } from 'react-redux'
import React, { useEffect, useState} from 'react';
import AddTenArticles from "../Requests/AddTenArticlesRequest"
import { Button } from '@mui/material';
import "../Styles/Buttons.css"

function TenArticles(props) {
  const [showPopup, setShowPopup] = useState(10);


  useEffect(() => {
    AddTenArticles(props, showPopup);
  }, [props]);

  const GetTenArticles = (event) => 
  {
    AddTenArticles(props, showPopup)
    setShowPopup(showPopup + 10)
  }

    return (
      <div>
        <Button onClick={GetTenArticles} className='simple_button'> Add 10 articles</Button>
        <NewsList newsList={props.news}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TenArticles);
  