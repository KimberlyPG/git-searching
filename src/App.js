import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Navigation from './containers/Navigation';
import Search from './containers/Search';
import Home from './containers/Home';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
        <Route index element={<Home />} />
        <Route path='search' element={<Search />} />
    </Routes>
  );
}

export default App;
