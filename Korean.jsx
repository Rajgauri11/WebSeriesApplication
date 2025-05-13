import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Or your specific Korean CSS file

const movies = [
  {
    title: "I Am Not Robot",
    image: "https://bingeddata.s3.amazonaws.com/uploads/2020/11/yJuNdF2lvSw2setvUdXDYZNRSSZ.jpg"
  },
  {
    title: "Hidden Love",
    image: "https://i.ytimg.com/vi/TinUopMNiSQ/maxresdefault.jpg"
  },
  {
    title: "Sweet Trap",
    image: "https://prod-images.viu.com/3066583451/030a722ddea5cf8c6b8227906b2fdf9e43c9c9c5?im=Resize,width=1920"
  },
  {
    title: "Put Your Head On My Shoulder",
    image: "https://aphrodite.gmanetwork.com/entertainment/articles/900_675_7_-20221108153031.jpg"
  },
  {
    title: "Sweet Sweet",
    image: "https://i.ytimg.com/vi/RiFkzsm9M9I/maxresdefault.jpg"
  },
  {
    title: "Live On",
    image: "https://i.ytimg.com/vi/bHfxNo9hk14/maxresdefault.jpg"
  },
  {
    title: "Hidden Marriage With Boss",
    image: "https://i.ytimg.com/vi/xEmoXw3RoRI/maxresdefault.jpg"
  },
  {
    title: "My Deskmate",
    image: "https://i.ytimg.com/vi/ZwNmxaY5RyM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAaI1qL2roU1SCnLusdywqZGa_6YA&days_since_epoch=19986"
  },
  {
    title: "My girlfriend is an alien",
    image: "https://wallpaperaccess.com/full/9236619.png"
  }
];

const Korean = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/series/${encodeURIComponent(title)}`);
  };

  return (
    <div className="container">
      <h1 className="title">Korean Web Series</h1>
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

export default Korean;
