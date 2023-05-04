import "./NewsList.css"
import "../RemoveButton/RemoveButton"
import RemoveButton from "../RemoveButton/RemoveButton";

function NewsList(props) {
    
    return (
        <div>
          {props.news.map((article, index) => (
            <div className="news-block" key={index}>
              <img src={article.urlToImage} alt={article.urlToImage}/>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>Author: {article.author}</p>
              <RemoveButton article={article}/>
            </div>
          ))}

          
        </div>
      );
}
export default NewsList;
