import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import SerchBar from './components/searchbar/searchbar';
import SearchBar from './components/searchbar/searchbar';

function App() {
  
  return (
  
    // <Routes>
    //   <Route path='/' element={<Home />} />
    // </Routes>
    <SearchBar />
  );
}

export default App;
