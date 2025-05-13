import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this line
import "./App.css";


const Home = () => {
  const images = [
    {
      url: "https://occ-0-753-1360.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABd6kK5Z384i6gWCHGPPdD1Dc0ej0YkDedm72TANilZE68g50-asCVPBXK8NKNfCB1RJjURXTwSEI-jGf2_LJn9UYDJKO.jpg?r=293",
      id: 1,
      title: "Put Your Head On My Shoulder",
    },
    {
      url: "https://s2.dmcdn.net/v/Xuk_E1diZk45JegKG/x720",
      id: 2,
      title: "Judwaa",
    },
    {
      url: "https://m.media-amazon.com/images/S/pv-target-images/6552675fa51462597be205beb76f64d39564a8df2fe76aa2c4e5f5a4f1aef72b.jpg",
      id: 3,
      title: "Ren: The Girl with the Mark",
    },
    {
      url: "https://i.ytimg.com/vi/xEmoXw3RoRI/maxresdefault.jpg",
      id: 4,
      title: "Hidden Marriage With Boss",
    },
    {
      url: "https://picfiles.alphacoders.com/648/648028.jpeg",
      id: 5,
      title: "Amber Girls School",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Add this line

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const recommandedRef = useRef(null);

  const movies = [
    {
      url: "https://m.media-amazon.com/images/S/pv-target-images/4fb4a0063d9872ece41bb9bdf3b93f4c11f28e0fdca568e61a7f7677fdb5ced8.jpg",
      title: "My Deskmate",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BYzdiMWFhNGEtNDk1OC00MmVlLWI5OWEtNDMzNTA5NDI0MjMzXkEyXkFqcGdeQXVyOTYyMzMxNDU@._V1_FMjpg_UX1000_.jpg",
      title: "Tujhpe Main Fida",
    },
    {
      url: "https://i.ytimg.com/vi/trjuYn3xTQk/hqdefault.jpg",
      title: "Sensitive Matter",
    },
    {
      url: "https://wallpaperaccess.com/full/9236619.png",
      title: "My girlfriend is an alien",
    },
    {
      url: "https://i.ytimg.com/vi/iyen_rx-ARA/maxresdefault.jpg",
      title: "Kamwali Bai",
    },
    {
      url: "https://artworks.thetvdb.com/banners/series/393630/posters/5fde52747fd6c.jpg",
      title: "Outlier",
    },
  ];
  

  const scrollAmount = 400;

  const scrollLeft = () => {
    if (recommandedRef.current) {
      recommandedRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (recommandedRef.current) {
      recommandedRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="main">
        {/* Slideshow */}
        <div className="slider-container">
          <button className="nav-btn left" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="slider-wrapper">
            <img
              src={images[currentIndex].url}
              alt="Slide"
              className="slider-image"
            />
        <button
  className="watch-now-btn"
  onClick={() =>
    navigate(`/series/${encodeURIComponent(images[currentIndex].title)}`)
  }
>
  ▶ Watch Now
</button>


          </div>
          <button className="nav-btn right" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div className="recommanded-container">
          <h2 className="recommanded-title">Recommended For You</h2>
          <div className="recommanded">
            <button className="nav-btn left" onClick={scrollLeft}>
              &#10094;
            </button>
            <div className="recommanded-track" ref={recommandedRef}>
            {movies.map((movie, index) => (
  <img
    key={index}
    src={movie.url}
    alt={movie.title}
    className="recommanded-item"
    onClick={() => navigate(`/series/${encodeURIComponent(movie.title)}`)}
  />
))}

            </div>
            <button className="nav-btn right" onClick={scrollRight}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
