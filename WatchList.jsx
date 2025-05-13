import React from "react";
import { useWatchlist } from "./WatchlistContext";
import { Link } from "react-router-dom";
import "./WatchList.css";

const WatchList = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <div className="empty-watchlist">
        <h2>No web series in your Watchlist 📭</h2>
        <p>Go explore and add your favorites!</p>
      </div>
    );
  }

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-heading">🎬 My Watchlist</h2>
      <div className="watchlist-grid">
        {watchlist.map((series, index) => (
          <div key={index} className="watchlist-card">
            <Link to={`/series/${encodeURIComponent(series.title)}`} className="card-link">
              <img src={series.poster} alt={series.title} className="watchlist-img" height={200}/>
              <h4 className="series-title">{series.title}</h4>
            </Link>
            <button className="remove-btn" onClick={() => removeFromWatchlist(series.title)}>
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
