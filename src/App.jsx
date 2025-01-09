import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import './App.css';
import NewsPages from './pages/NewsPages';
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Router>
      <div className="App" dir="rtl">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/news/:slug" element={<NewsPages />} />
          <Route path="/search" element={<SearchPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
