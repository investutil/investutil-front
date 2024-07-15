import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen && isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <div className="flex flex-1">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isNavOpen={isNavOpen} />
          <div className={`flex-1 p-4 ${isSidebarOpen ? 'ml-48' : ''}`}>
            <Routes>
              <Route path="/blog" element={<div>Blog Content</div>} />
              <Route path="/docs" element={<div>Docs Content</div>} />
              <Route path="/about" element={<div>About Content</div>} />
              <Route path="/" element={<MainContent />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
