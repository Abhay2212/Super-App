export const fetchMovies = async (genre) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
        options
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch movies. Status: ${response.status}`);
      }
  
      const data = await response.json();
      const slicedMovies = data.results.splice(4, 4);
  
      return slicedMovies;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  

