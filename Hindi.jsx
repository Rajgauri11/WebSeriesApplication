
import React from "react";
import { useNavigate } from "react-router-dom";


const movies = [
  { title: "Sisters", image: "https://img-cdn.thepublive.com/fit-in/1200x675/afaqs/media/post_attachments/ec48d172dd9de7105986118ab267cffb849adf65ddfeb80e66770341d4dce3b1.jpg" },
  { title: "Baat Pakki", image: "https://i.ytimg.com/vi/_ounzSWlBuM/maxresdefault.jpg" },
  { title: "Dehati Ladke", image: "https://i.postimg.cc/4y4Vx8rJ/Dehati-Ladke-S1.jpg" },
  { title: "Tujhpe Main Fida", image: "https://m.media-amazon.com/images/M/MV5BYzdiMWFhNGEtNDk1OC00MmVlLWI5OWEtNDMzNTA5NDI0MjMzXkEyXkFqcGdeQXVyOTYyMzMxNDU@._V1_FMjpg_UX1000_.jpg" },
  { title: "Naam Namak Nishan", image: "https://static.digit.in/product/naam-namak-nishan-back-ea968d495f.jpeg" },
  { title: "Aisa Waisa Pyaar", image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/faaa88502c0738993e39a04f5566f7d8162807085f6f6c996f7012daf08f5773._RI_V_TTW_.jpg" },
  { title: "Judwaa", image: "https://s2.dmcdn.net/v/Xuk_E1diZk45JegKG/x720" },
  { title: "Call me bae", image: "https://st1.latestly.com/wp-content/uploads/2024/09/Call-Me-Bae-Leaked-Online.jpg" },
  { title: "Amber Girls School", image: "https://picfiles.alphacoders.com/648/648028.jpeg" },
];

const Hindi = () => {
   const navigate = useNavigate();
  
    const handleClick = (title) => {
      navigate(`/series/${encodeURIComponent(title)}`);
    };
  return (
    <div className="container">
    <h1 className="title">Hindi Web Series</h1>
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

export default Hindi;
