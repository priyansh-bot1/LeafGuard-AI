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
import OpenDemo from './pages/OpenDemo';
import RealTimeMonitoring from './pages/RealTimeMonitoring';
import DiseaseAnalysis from './pages/DiseaseAnalysis';
import GrowthTracking from './pages/GrowthTracking';
import LeafHealthMap from './pages/LeafHealthMap';
import ProtectTrees from './pages/ProtectTrees';

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
            <Route path="/open-demo" element={<OpenDemo />} />
            <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
            <Route path="/disease-analysis" element={<DiseaseAnalysis />} />
            <Route path="/growth-tracking" element={<GrowthTracking />} />
            <Route path="/leaf-health-map" element={<LeafHealthMap />} />
            <Route path="/protect-trees" element={<ProtectTrees />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;