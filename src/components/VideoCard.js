import React from 'react';
import './VideoCard.css';

const base_url = "https://image.tmdb.org/t/p/original/"

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img alt="" src={`${base_url}${movie.backdrop_path}`}></img>
            <h2>{movie.name || movie.title}</h2>
            <p>IMDB: <strong>{movie.vote_average}</strong> </p>
        </div>
    )
}

export default VideoCard
