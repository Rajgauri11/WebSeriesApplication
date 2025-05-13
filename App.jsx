import React from 'react';
import Router from './Router.jsx';
import Footer from './Footer.jsx';
import './App.css';

import { WatchlistProvider } from './WatchlistContext'; // ✅ Import this

const App = () => {
  return (
    <WatchlistProvider> {/* ✅ Wrap entire app */}
      <div>
        <Router />
        <Footer />
      </div>
    </WatchlistProvider>
  );
};

export default App;

