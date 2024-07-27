// src/components/ComingSoon.js
import React from 'react';

import backgroundImage from '../assets/zori.jpeg'; // Import the background image
import './ComingSoon.css'; // Import CSS for styling



const ComingSoon = () => {
  

  return (
    <div
      className="coming-soon"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use inline style for background image
    >
      <header className="coming-soon-header">
        <h1>Zori.live</h1>
        <p>Coming Soon</p>
      </header>
      <main className="coming-soon-main">
        <p>We are working hard to bring you something amazing. Stay tuned!</p>
        
      </main>
      <footer className="coming-soon-footer">
        <p>&copy; 2024 Zori. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
