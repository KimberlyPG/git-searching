import React from 'react';
import { Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './routes/home/home';
import Search from './components/search/search';

function App() {
  
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/search' element={<Search />} />
    </Routes>
    // <Search />
  );
}

export default App;
