import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { connect } from 'react-redux'
import GetTenArticles from "../../Requests/GetTenArticleRequest"
import "./SearchArticles.css"

function SearchArticles(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [oldNews, setOldNews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(oldNews)
    let updatedNews = oldNews;

    if(title !== '')
    {
        updatedNews = updatedNews.filter(item => item.title.includes(title));
    }

    if(description !== '')
    {
        updatedNews = updatedNews.filter(item => item.description.includes(description));
    }

    if(title === '' && description === '')
    {
        GetTenArticles(props)
    }

    props.setNews(updatedNews)
  }

  useEffect(() => {
    setOldNews(props.news)
  }, [props]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <h4 className='search_labels'>Title</h4>
        <TextField
          required
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <h4 className='search_labels'>Description</h4>
        <TextField
          required
          id="content"
          multiline
          rows={4}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <Button className='search_button' variant="contained" type="submit" style={{marginLeft: "8px"}}>
        Search
      </Button>
    </Box>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchArticles);
