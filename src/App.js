// src/App.js
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (

    // full width
    <div className="App">
      <Navbar />

    {/* // 2560px width */}
      <div className='cotainer-max-width'>

      <Home />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
