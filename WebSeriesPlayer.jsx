import React, { useState } from 'react';
import './WebSeriesPlayer.css'

const WebSeriesPlayer = () => {
    const episodes = [
        {
          title: 'Episode 1',
          videoId: 'v26sxMBQwOk', // Replace with real YouTube ID
        },
        {
          title: 'Episode 2',
          videoId: 'w666oFLq3kQ',
        },
        {
          title: 'Episode 3',
          videoId: 'zmc-XUKbMxI',
        },
        {
            title: 'Episode 4',
            videoId: 'kckeSRKqux0',
          },
          {
            title: 'Episode 5',
            videoId: '0lPFHApCrZ8',
          },
    ]
    
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayClick = () => {
    setShowPlayer(true);
  };

  return (
    <div className="series-page">
      <div className="left-panel">
     
        <div className="breadcrumbs">Home &gt; Series &gt; Mainland China</div>
        <h1 className="title">Put Your Head On My Shoulder</h1>
        <div className="rating">
          ⭐ <span>9.6</span> <small>(115,811)</small>
        </div>
        <div className="meta">
          <span className="year">2019</span>
          <span className="badge">U/A 13+</span>
          {/* <span className="episodes">24 episodes</span> */}
        </div>

        <div className="info">
          <p><strong>Genre:</strong> Romantic Comedy</p>
          <p><strong>Cast:</strong> Xing Fei, Lin Yi, Tang Xiao Tian and 2 more</p>
          <p><strong>Subtitles:</strong> English, Arabic, German and 13 more</p>
          <p><strong>Subs By:</strong> Lean on Me</p>
        </div>

        <div className="actions">
          <button className="play-btn" onClick={handlePlayClick}>▶ Ep. 1</button>
          <button className="watchlist-btn">＋ Watchlist</button>
        </div>
      </div>

      <div className="right-panel">
        <img
          src="https://wallpaperaccess.com/full/4622196.jpg"
          alt="Put Your Head On My Shoulder"
          className="poster"
        />
      </div>

      {showPlayer && (
        <div className="video-modal">
          <iframe
            src="https://www.youtube.com/embed/v26sxMBQwOk?autoplay=1"
            title="Episode 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-btn" onClick={() => setShowPlayer(false)}>×</button>
        </div>
      )}

<section className="episodes">
  <h3>Season 1 Episodes</h3>
  <div className="episode-grid">
    {episodes.map((ep, index) => (
      <div key={index} className="episode-card" onClick={() => setCurrentVideo(ep.videoId)}>
        <iframe
          src={`https://www.youtube.com/embed/${ep.videoId}?rel=0&modestbranding=1&controls=1&showinfo=0`}
          title={ep.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{ep.title}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default WebSeriesPlayer;