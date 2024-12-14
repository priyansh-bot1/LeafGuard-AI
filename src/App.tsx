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
import DiseaseIdentification from './pages/DiseaseIdentification';
import HealthAnalysis from './pages/HealthAnalysis';
import AlertsNotifications from './pages/AlertsNotifications';
import GrowthMonitoring from './pages/GrowthMonitoring';
import AlertDetails from './pages/AlertDetails';
import HistoricalAnalysis from './pages/HistoricalAnalysis';
import ChoosePlan from './pages/ChoosePlan';
import ExploreResources from './pages/ExploreResources';
import ContactSupport from './pages/ContactSupport';
import StartChat from './pages/StartChat';
import FloatingChatbot from './components/chat/FloatingChatbot';

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
            <Route path="/disease-identification" element={<DiseaseIdentification />} />
            <Route path="/health-analysis" element={<HealthAnalysis />} />
            <Route path="/alerts-notifications" element={<AlertsNotifications />} />
            <Route path="/growth-monitoring" element={<GrowthMonitoring />} />
            <Route path="/alert-details" element={<AlertDetails />} />
            <Route path="/historical-analysis" element={<HistoricalAnalysis />} />
            <Route path="/choose-plan" element={<ChoosePlan />} />
            <Route path="/explore-resources" element={<ExploreResources />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="/start-chat" element={<StartChat />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <Footer />
        <FloatingChatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;