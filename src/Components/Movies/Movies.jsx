import React, { useEffect, useState } from "react";
import { fetchMovies } from "./MovieUtility";
import style from "./Movies.module.css";
import defaultImg from "../../Components/Assets/Drama.png";

function Movies({ selectedTitle }) {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetchMovies(selectedTitle)
      .then((movies) => {
        setMovieData(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (movieData.length < 1) {
    return <h3 className={style.moviesTitles}>Loading...</h3>;
  }
  return (
    <div className={style.movies}>
      <h3 className={style.moviesTitles}>{selectedTitle}</h3>
      <div className={style.moviesImages}>
        {movieData.map((item) => (
          <img
            src={item?.primaryImage?.url ? item.primaryImage.url : defaultImg}
            alt="img"
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
