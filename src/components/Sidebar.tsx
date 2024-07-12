import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>InvestUtil</h2>
      <ul>
        <li>Global Market Open Times</li>
        <li>World Clock</li>
        <li>Financial Market Holidays</li>
        <li>Financial Report Analysis Tools</li>
      </ul>
    </div>
  );
};

export default Sidebar;
