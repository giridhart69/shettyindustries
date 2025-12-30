import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BlazeHighAI from './pages/BlazeHighAI';
import BlazeHighFarms from './pages/BlazeHighFarms';

function App() {
  return (
    <Router basename="/shettyindustries">
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blazehigh-ai" element={<BlazeHighAI />} />
          <Route path="/blazehigh-farms" element={<BlazeHighFarms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;