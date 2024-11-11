import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Monitor from './pages/Monitor';
import ProtectOrchard from './pages/ProtectOrchard';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#003025]">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/protect-orchard" element={<ProtectOrchard />} />
          <Route path="/results" element={<Results/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;