import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Monitor from './pages/Monitor';
import ProtectOrchard from './pages/ProtectOrchard';
import Results from './pages/Results';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#003025] flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/monitor" element={<Monitor />} />
            <Route path="/protect-orchard" element={<ProtectOrchard />} />
            <Route path="/results" element={<Results />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;