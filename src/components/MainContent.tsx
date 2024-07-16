import React, { useEffect, useState } from 'react';

const MainContent: React.FC = () => {
  const [marketStatus, setMarketStatus] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/market/open')
      .then(response => response.json())
      .then(data => setMarketStatus(data.market_open ? 'Open' : 'Closed'))
      .catch(error => console.error('Error fetching market status:', error));
  }, []);

  return (
    <div className="flex-1 p-4">
      <p>This is the main content area, displaying global market open times, world clock, financial market holidays, and financial report analysis tools.</p>
      {marketStatus !== null && (
        <p>Current US Stock Market Status: {marketStatus}</p>
      )}
    </div>
  );
};

export default MainContent;
