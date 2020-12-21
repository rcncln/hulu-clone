
const API_KEY = '4284312f521757debc5d1394f2d4a0ae';

// eslint-disable-next-line import/no-anonymous-default-export
const links =  {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&wih_genres=28`

}

export default links;