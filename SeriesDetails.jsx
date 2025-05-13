import React from "react";
import { useParams } from "react-router-dom";
import seriesData from "./seriesData";
import "./SeriesDetail.css";
import { useWatchlist } from "./WatchlistContext";

const SeriesDetails = () => {
  const { addToWatchlist } = useWatchlist();
const { title } = useParams();
const series = seriesData.find((s) => s.title === decodeURIComponent(title));


  if (!series) return <h2>Series not found</h2>;

  return (
    <div className="series-page">
      <div className="left-panel">
        
        <h1 className="title">{series.title}</h1>
        <div className="rating">
          ⭐ <span>{series.rating}</span>{" "}
          <small>({series.votes})</small>
        </div>
        <div className="meta">
          <span className="year">{series.year}</span>
          <span className="badge">{series.badge}</span>
        </div>

        <div className="info">
          <p><strong>Genre:</strong> {series.genre}</p>
          <p><strong>Cast:</strong> {series.cast}</p>
          <p><strong>Subtitles:</strong> {series.subtitles}</p>
          <p><strong>Subs By:</strong> {series.subsBy}</p>
        </div>
        <div className="right-panel">
        <img src={series.poster} alt={series.title} className="poster" height={500} width={850}/>
      </div>
        <div className="actions">
          <a href={series.episodes[0]} target="_self" rel="noreferrer">
            <button className="play-btn">▶ Ep. 1</button>
          </a>
          <button
  className="watchlist-btn"
  onClick={() => {
    const confirmed = window.confirm("Add this series to your watchlist?");
    if (confirmed) {
      addToWatchlist(series);
    }
  }}
>
  ＋ Watchlist
</button>

        </div>

       <div className="episodes1">
       <h2 className="header">Season 1 Episodes</h2>
        <div className="episodes">
          {series.episodes.map((ep, index) => (
            <div key={index} className="episode-card">
              <iframe
                src={`${ep}?rel=0&modestbranding=1`}
                title={`Episode ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Episode {index + 1}</p>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
