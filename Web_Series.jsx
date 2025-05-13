import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import "./WebSeries.css"; 

const Web_Series = () => {
  const trailers = [
    "https://www.youtube.com/embed/Bx0piV_Uf4E?start=0&end=60&autoplay=1", 
    "https://www.youtube.com/embed/xNRTQH-DYys?start=0&end=60&autoplay=1", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trailers.length);
    }, 60000); 

    return () => clearInterval(interval);
  }, [trailers.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % trailers.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + trailers.length) % trailers.length);

  return (
    <div>
    <div  style={{backgroundColor:"black"}}>
    <nav className="smallNav">
        <ul>
          <li><Link to="koreanWebSeries">Korean</Link></li>
          <li><Link to="hindiWebSeries">Hindi</Link></li>
          <li><Link to="comedyWebSeries">Comedy</Link></li>
          <li><Link to="englishWebSeries">English</Link></li>
        </ul>
      </nav>

      <div >
       
        <div className="mainW">
          <button className="nav-btn left" onClick={prevSlide}>&#10094;</button>
          <iframe
            src={trailers[currentIndex]}
            className="slider-video"
            title="Web Series Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <button className="nav-btn right" onClick={nextSlide}>&#10095;</button>
          <div className="dots1">
            {trailers.map((_, index) => (
              <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
      <div>
      <Outlet />

      </div>
    </div>
    </div>
  );
};

export default Web_Series;
