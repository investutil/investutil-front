import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBlog, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  isNavOpen: boolean;
  toggleNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen, isNavOpen, toggleNav }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-2xl">InvestUtil</h1>
      </div>
      <nav className="hidden md:flex space-x-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/blog" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faBlog} className="mr-2" /> Blog
            </Link>
          </li>
          <li>
            <Link to="/docs" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faBook} className="mr-2" /> Docs
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
            </Link>
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-white" />
      </button>
      {isNavOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-gray-800 text-white">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link to="/blog" className="hover:underline flex items-center" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBlog} className="mr-2" /> Blog
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:underline flex items-center" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBook} className="mr-2" /> Docs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline flex items-center" onClick={toggleNav}>
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
