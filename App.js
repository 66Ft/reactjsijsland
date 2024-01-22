import React from 'react';
import './App.css';
import LandingPage from './components/Landingpage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Landingpage/Footer';
import Foutepagina from './components/Pages/Foutepagina';
import Detailpagina from './components/Pages/Detailpagina';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Foutepagina />} />
          <Route path="/detail/:id" element={<Detailpagina />} />
        </Routes>
        <Footer />
      </BrowserRouter>     
    </div>
  );
}

export default App;
