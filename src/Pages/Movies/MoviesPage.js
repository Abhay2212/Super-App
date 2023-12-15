import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import Movies from "../../Components/Movies/Movies";
import MoviesLogo from "../../Components/Assets/moviesLogo.png";
import style from "../../Components/Movies/Movies.module.css";

function MoviesPage() {
  const movies = JSON.parse(window.localStorage.getItem("selectedTitles"));
  const navigate = useNavigate();

  if (!movies || movies.length === 0) {
    navigate("/login");
    return null;
  }

  return (
    <div className={style.moviesContainer}>
      <div className={style.moviesHeading}>
        <h3>Super app</h3>
        <Link to='/'>
        <img src={MoviesLogo} alt="logo" />
        </Link>
      </div>
      <p> Entertainment according to your choice </p>
      <div className={style.movies}>
        <div>
          {movies.map((title, index) => (
            <Movies selectedTitle={title} key={index} />
          ))}
        </div>
      </div>
   </div>
  );
}

export default MoviesPage;
