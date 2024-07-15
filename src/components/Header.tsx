import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">InvestUtil</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/docs" className="hover:underline">Docs</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
