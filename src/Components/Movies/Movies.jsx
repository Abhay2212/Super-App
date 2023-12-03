//   return (
//     <div className={style.moviesContainer}>
//       <div className={style.moviesHeader}>
//         <h3>Super app</h3>
//         <Link to="/login">
//           <img src={MoviesLogo} alt="" />
//         </Link>
//       </div>
// <p>Entertainment according to your choice</p>
//       <div className={style.movies}>
//         <div className={style.moviesTitles}>
//           {localStorageData &&
//             localStorageData.map((title, index) => (
//               <div key={index}>
//                 <p>{title}</p>
//                 {apiData && apiData.images && (
//                      <div>
//                      {/* Display your images here */}
//                      {apiData.images.map((image, i) => (
//                        <img key={i} src={image.url} alt={`Image ${i}`} />
//                      ))}
//                    </div>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Movies;

import React, { useState, useEffect } from "react";
import pLimit from "p-limit";
import { Link } from "react-router-dom";
import style from "./Movies.module.css";
import MoviesLogo from "../Assets/moviesLogo.png";

const unogsUrl =
  "https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie";
const imdbUrl =
  "https://imdb8.p.rapidapi.com/title/get-all-images?tconst=tt0944947";

const unogsOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "27de014072mshccbeed3c95e488ep1cbaf5jsn690f4a322f68",
    "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
  },
};

const imdbOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "27de014072mshccbeed3c95e488ep1cbaf5jsn690f4a322f68",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

const limit = pLimit(1);

function Movies() {
  const [localStorageData, setLocalStorageData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [imdbImages, setImdbImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const unogsResponse = await fetch(unogsUrl, unogsOptions);
        const unogsResult = await unogsResponse.json();
        console.log("UNOGS Data:", unogsResult);
        setApiData(unogsResult);

        const imdbResult = await limit(() =>
          fetch(imdbUrl, imdbOptions).then((res) => res.json())
        );
        console.log("IMDb Data:", imdbResult);
        setImdbImages(imdbResult);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const dataFromLocalStorage = localStorage.getItem("selectedTitles");
    const parsedData = dataFromLocalStorage
      ? JSON.parse(dataFromLocalStorage)
      : null;
    setLocalStorageData(parsedData);
  }, []);

  return (
    <div className={style.moviesContainer}>
      <div className={style.moviesHeader}>
        <h3>Super app</h3>
        <Link href={"/"}>
          <img src={MoviesLogo} alt="" />
        </Link>
      </div>
      <p>Entertainment according to your choice</p>
      <div className={style.movies}>
        <div className={style.moviesTitles}>
          {localStorageData &&
            localStorageData.map((title, index) => {
              const titleImages =
                imdbImages &&
                imdbImages.resource &&
                imdbImages.resource.images.slice(0, 4);
              return (
                <div key={index}>
                  <p>{title}</p>
                  {titleImages && (
                    <div className={style.moviesImages}>
                      {titleImages.map((image, i) => (
                        <img key={i} src={image.url} alt={`Image ${i}`} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
