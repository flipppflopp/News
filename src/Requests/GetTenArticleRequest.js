import axios from 'axios';
import API_KEY from "../configs/api_config"

function GetTenArticles(props) 
{
    axios.get('https://newsapi.org/v2/everything', {
        params: {
          sources: 'bbc-news',
          sortBy: 'popularity',
          apiKey: API_KEY
        }
      })
      .then(response => {
        props.setNews(response.data.articles.slice(0, 10));
      })
      .catch(error => {
        console.log(error);
      });
}

export default GetTenArticles; 