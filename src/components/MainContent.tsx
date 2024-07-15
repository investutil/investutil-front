import React, { useEffect, useState } from 'react';

const MainContent: React.FC = () => {
  const [marketOpen, setMarketOpen] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/market/open')
      .then(response => response.json())
      .then(data => setMarketOpen(data.market_open))
      .catch(error => console.error('Error fetching market status:', error));
  }, []);

  return (
    <div className="flex-1 p-4">
      <p>This is the main content area, displaying global market open times, world clock, financial market holidays, and financial report analysis tools.</p>
      {marketOpen !== null && (
        <p>Current US Stock Market Status: {marketOpen ? 'Open' : 'Closed'}</p>
      )}
    </div>
  );
};

export default MainContent;
