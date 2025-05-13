
import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  { title: "Kamwali Bai", image: "https://i.ytimg.com/vi/iyen_rx-ARA/maxresdefault.jpg" },
  { title: "United Kacche", image: "https://akamaividz2.zee5.com/image/upload/w_1623,h_914,c_scale,f_webp,q_auto:eco/resources/0-1-6z5330985/list/1170x658withlogocde2b1fd93b440c5ba1a21ba2b507bf2.jpg" },
  { title: "Modern Parivaar", image: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-4z5117885/list/1170x658withlogod338a2810b0a4aa694e23660b83bcc6b.jpg" },
  { title: "Sunflower", image: "https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-6-3284/list/1170x658withlogo2434803d29654ae9b0d43f885301677187be233917124f0c8f26a96bfccc0ba894ab50e9cfed4026ab6545347d1775d6.jpg" },
  { title: "Mentalhood", image: "https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-6-2471/list/062471inlist.jpg" },
  // { title: "Bhoot Purva", image: "https://akamaividz2.zee5.com/image/upload/w_1623,h_914,c_scale,f_webp,q_auto:eco/resources/0-1-208593/list/promo1170x658.jpg" },
  // { title: "What's Up Bai", image: "https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-1-170364/list/hindibai1170x1239114757.jpg" },
  // { title: "Akoori", image: "https://image.tmdb.org/t/p/original/macdPrBWh80k0P4tIDjNJUun8PF.jpg" },
  // { title: "Engineering Girls", image: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-3343/list/117010338191581033819158a3d03035f0f448fdb2ea75b2c85057bd.jpg" },
];

const Comedy = () => {
  const navigate = useNavigate();
    
      const handleClick = (title) => {
        navigate(`/series/${encodeURIComponent(title)}`);
      };
  return (
    <div className="container">
    <h1 className="title">Comedy Web Series</h1>
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

export default Comedy;
