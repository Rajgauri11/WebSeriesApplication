
import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  { title: "Ren: The Girl with the Mark", image: "https://m.media-amazon.com/images/S/pv-target-images/6552675fa51462597be205beb76f64d39564a8df2fe76aa2c4e5f5a4f1aef72b.jpg" },
  { title: "Sensitive Matter", image: "https://i.ytimg.com/vi/trjuYn3xTQk/hqdefault.jpg" },
  { title: "Outlier", image: "https://artworks.thetvdb.com/banners/series/393630/posters/5fde52747fd6c.jpg" },
  { title: "The Bad Seed", image: "https://pplonline.org/wp-content/uploads/2022/11/BadSeed-1080x675.jpg" },
  { title: "The Bible", image: "https://h-o-m-e.org/wp-content/uploads/2023/06/the-bible-series-netflix-1.jpg" },
  // { title: "The Hunting Party", image: "https://www.wallpaperbetter.com/wallpaper/504/784/30/linkin-park-the-hunting-party-2K-wallpaper.jpg" },
  // { title: "English Teacher", image: "https://ntvb.tmsimg.com/assets/p27840511_b_h8_ab.jpg?w=960&h=540" },
  // { title: "The Witcher", image: "https://es.web.img3.acsta.net/pictures/19/10/24/17/14/2842556.jpg" },
  // { title: "The Crown", image: "https://imgeng.jagran.com/images/2023/oct/TheCrownSeason61696923154517.jpg" },
];

const English = () => {
  const navigate = useNavigate();
      
        const handleClick = (title) => {
          navigate(`/series/${encodeURIComponent(title)}`);
        };
  return (
    <div className="container">
    <h1 className="title">English Web Series</h1>
    <div className="grid">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card" onClick={() => handleClick(movie.title)}>
          <img src={movie.image} alt={movie.title} className="movie-image" />
          <div className="overlay">{movie.title}</div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default English;
