import "./NewsList.css"
import "../Buttons/RemoveButton/RemoveButton"
import RemoveButton from "../Buttons/RemoveButton/RemoveButton";
import PinButton from "../Buttons/PinButton/PinButton"
import { connect } from 'react-redux'

function NewsList(props) {
    
    return (
        <div>
          {props.news.map((article, index) => (
            <div className="news-block" key={index}>
              <img src={article.urlToImage} alt={article.urlToImage}/>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>Author: {article.author}</p>

              <div className="bottom_right_button">
                <RemoveButton article={article}/>
                <PinButton article={article}/>
              </div>
            </div>
          ))}

          
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
