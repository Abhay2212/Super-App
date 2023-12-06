import React from 'react'
import Movie from '../../Components/Movies/Movie'
import MoviesLogo from "../../Components/Assets/moviesLogo.png";
import styles from "../../Components/Movies/list.module.css";

function MoviesPage() {
  const movies = JSON.parse(window.localStorage.getItem("selectedTitles"));
  return (
    // <div>
    //   <Movie/>
    // </div>

    <>
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "black",
        overflowX: "hidden",
        maxHeight: "100vh",
      }}
    >
      <img
        src={MoviesLogo}
        style={{
          position: "absolute",
          top: "2vh",
          right: "3vw",
          height: "60px",
          width: "60px",
        }}
      />
      <p
        style={{
          color: "green",
          fontSize: "3rem",
          margin: "1vw",
        }}
        className={styles.header}
      >
        Super app
      </p>
      <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
        Entertainment according to your choice
      </p>
      {movies.map((movie) => (
        <Movie selectedTitles={movie} />
      ))}
    </div>
  </>
  )
}

export default MoviesPage