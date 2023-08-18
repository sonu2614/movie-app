import React,{useState} from 'react';
import moviesData from './datas/moviesData';
import MovieDisplay from './MovieDisplay';

const MovieList = ({addMovie}) => {
    const [selectedMovie,setSelectedMovie]=useState("")

    return (
    <div className="movie-list">

            {
                moviesData.map((movie)=>(
                    <h1 onClick={()=>addMovie(movie)}>{movie.title}</h1>
                    ))
            }
            {/* <MovieDisplay movieToBeDisplayed={selectedMovie} /> */}
        </div>
    )
}
                

export default MovieList;