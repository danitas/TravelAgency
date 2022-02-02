import React from 'react';
import { Header } from './Header';
import Home from './Storefront/Pages/Home';
import About from './Storefront/Pages/AboutUs';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
