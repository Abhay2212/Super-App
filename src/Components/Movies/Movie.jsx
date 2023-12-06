import { useEffect, useState } from "react";
import styles from "./list.module.css";

const Movie = ({ selectedTitles }) => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        // "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        // "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        "X-RapidAPI-Key": "27de014072mshccbeed3c95e488ep1cbaf5jsn690f4a322f68",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://moviesdatabase.p.rapidapi.com/titles?selectedTitles=${selectedTitles}&year=2020`,
          options
        );
        const data = await response.json();
        setMovies(data.results.splice(4, 4));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [selectedTitles]);

  return (
    <>
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {selectedTitles}
      </p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => (
          <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
            <img
              src={movie?.primaryImage?.url}
              style={{
                objectFit: "cover",
                width: "20vw",
                height: "15vh",
                borderRadius: "12px",
              }}
              alt={`Movie ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Movie;
