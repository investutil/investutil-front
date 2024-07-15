import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-200 w-64 min-h-screen p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:relative z-10`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">InvestUtil</h2>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faCog} className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/market-open-times" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" /> Global Market Open Times
            </Link>
          </li>
          <li>
            <Link to="/world-clock" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" /> World Clock
            </Link>
          </li>
          <li>
            <Link to="/holidays" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Financial Market Holidays
            </Link>
          </li>
          <li>
            <Link to="/report-analysis" className="hover:underline flex items-center">
              <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Financial Report Analysis Tools
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
