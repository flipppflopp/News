import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import TenArticles from './Pages/TenArticles';
import Layout from "./Components/Layout/Layout"

function App() {
  return (
    <Router>
      <div>
        <Layout/>

        <Routes>
          <Route path="/ten-articles" element={<TenArticles/>}/>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
