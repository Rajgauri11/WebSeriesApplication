import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (series) => {
    // avoid duplicates
    if (!watchlist.find((s) => s.title === series.title)) {
      setWatchlist([...watchlist, series]);
    }
  };

  const removeFromWatchlist = (title) => {
    setWatchlist(watchlist.filter((s) => s.title !== title));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
