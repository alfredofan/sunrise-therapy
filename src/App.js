// src/App.js
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
