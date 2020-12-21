import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import './Results.css';
import axios from '../axios.js';
import requests from '../requests';

const API_KEY = '4284312f521757debc5d1394f2d4a0ae';

function Results() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
       
      console.log(request.data.results)
      setMovies(request.data.results)
      
    }
    fetchData();
  }, [])

  return (
    <div className="results">
      {
        movies.map((movie, index) => (
          <VideoCard movie={movie} key={index} />
        )

        )
      }
     

    </div>
  )
}

export default Results
