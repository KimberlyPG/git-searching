import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Navigation from './routes/navigation/navigation';
import Search from './routes/search/search';
import Home from './routes/home/home';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
        <Route index element={<Home />} />
        <Route path='search' element={<Search />} />
    </Routes>
    // <Home />
  );
}

export default App;
