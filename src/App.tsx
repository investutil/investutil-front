import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
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
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} isNavOpen={isNavOpen} toggleNav={toggleNav} />
          <div className="flex flex-1">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isNavOpen={isNavOpen} />
            <div className={`flex-1 p-4 ${isSidebarOpen ? 'ml-48' : ''}`}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/blog"
                  element={
                    <ProtectedRoute>
                      <div>Blog Content</div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/docs"
                  element={
                    <ProtectedRoute>
                      <div>Docs Content</div>
                    </ProtectedRoute>
                  }
                />
                <Route path="/about" element={<div>About Content</div>} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <MainContent />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
