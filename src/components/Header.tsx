import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <h1 className="text-2xl">InvestUtil</h1>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/docs" className="hover:underline">Docs</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
