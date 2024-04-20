// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ServicesPage from './pages/services/ServicesPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='container-max-width'>
          {/* Define the routes */}
          <Routes>
            <Route path="/:section?" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
