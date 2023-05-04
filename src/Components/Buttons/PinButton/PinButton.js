import React, { useEffect, useState} from 'react';
import { Button } from '@mui/material';
import "../../../Styles/Buttons.css"
import { connect } from 'react-redux'

function PinButton(props) {
    
    const PinArticleClick = () => {
        if (props.article.position === undefined) {
            if(props.news.some(item => item.position != undefined))
            {
                alert("Unpin previous article");
                return;
            }

            const pinnedArticle = {
                ...props.article,
                position: props.news.indexOf(props.article)
            };
            const updatedNews = props.news.filter(item => item !== props.article);
            updatedNews.unshift(pinnedArticle);
            props.setNews(updatedNews);
        } else {
            let index = props.article.position;
            const updatedArticle = {
                ...props.article,
                position: undefined
            };
    
            const updatedNews = [...props.news]; // create a new array
    
            updatedNews.splice(0, 1);
            updatedNews.splice(index, 0, updatedArticle);
    
            props.setNews(updatedNews);
        }
    };
    

    return (
        <div>
            <Button onClick={PinArticleClick}>
                {props.article.position === undefined ? <p>Pin</p> : <p>Unpin</p>}
            </Button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(PinButton);
