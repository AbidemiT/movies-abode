export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  headers: {
    accept: 'application/json',
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY}`
    }
  };

  export const fetchMovies = async ({query}: {query: string}) => { 
    const endpoint =  query ?  `/search/movie?query=${encodeURIComponent(query)}` : '/discover/movie?sort_by=popularity.desc';
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: TMDB_CONFIG.headers
    });

    if(!response.ok) {
      //@ts-ignore
      throw new Error('Failed to fetch movies', response.statusText);
    }

    const data = await response.json();
    return data.results;
  };


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));