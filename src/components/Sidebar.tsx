import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside className={`bg-gray-200 w-64 min-h-screen p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <h2 className="text-xl mb-4">InvestUtil</h2>
      <nav>
        <ul className="space-y-2">
          <li><Link to="/market-open-times" className="hover:underline">Global Market Open Times</Link></li>
          <li><Link to="/world-clock" className="hover:underline">World Clock</Link></li>
          <li><Link to="/holidays" className="hover:underline">Financial Market Holidays</Link></li>
          <li><Link to="/report-analysis" className="hover:underline">Financial Report Analysis Tools</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
