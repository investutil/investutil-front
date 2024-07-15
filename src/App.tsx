import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route path="/blog" element={<div>Main Content for Blog</div>} />
            <Route path="/docs" element={<div>Main Content for Docs</div>} />
            <Route path="/about" element={<div>Main Content for About</div>} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
