import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IMG from './assets/Logo.png';
import seriesData from './seriesData'; // Import your web series data

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = seriesData.filter((series) =>
      series.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (title) => {
    setSearchTerm('');
    setSuggestions([]);
    navigate(`/series/${encodeURIComponent(title)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSelect(suggestions[0].title); // Navigate to the first match
    }
  };

  return (
    <div>
      <nav className="navbar">
        <img src={IMG} alt="logo" height={100} />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/webSeries">WebSeries</Link></li>
          <li><Link to="/watchlist">WatchList</Link></li>
          <li>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search Web Series"
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="search-box"
              />
              <i className="fa fa-solid fa-magnifying-glass"></i>
              {suggestions.length > 0 && (
                <div className="search-results">
                  {suggestions.map((s, index) => (
                    <div
                      key={index}
                      className="search-result-item"
                      onClick={() => handleSelect(s.title)}
                    >
                      {s.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
          <li className="login"><button
  onClick={() => {
    localStorage.removeItem('isLoggedIn')
    window.location.href = '/login'
  }}
>
  Logout
</button>
</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
