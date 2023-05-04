import { Button } from '@mui/material';
import "../../../Styles/Buttons.css"
import { connect } from 'react-redux'

function RemoveButton(props) {
    
    const RemoveArticleClick = () => {
        let updatedNews = props.news.filter(item => item !== props.article);
        props.setNews(updatedNews);
      }

    return (
        <div>
            {props.article.createdByUser === true ?
                <Button onClick={RemoveArticleClick}>Remove</Button> : <></>
            }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
