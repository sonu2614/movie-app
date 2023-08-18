import React from 'react'

const MovieDisplay = ({movieToBeDisplayed}) => {
    if(!movieToBeDisplayed) return null
    
    return (
    <div>
            <div className="container">
                <div className="movie-display">
                    <h1>Movie Info</h1>
                <h1>{movieToBeDisplayed.title}</h1>
                <p>{movieToBeDisplayed.year}</p>
                <p>{movieToBeDisplayed.plot}</p>
                <p>{movieToBeDisplayed.genre}</p>
                </div>
                <div className="photo">
                    <img src={movieToBeDisplayed.poster}/>
                </div>
            </div>
        </div>
    )
}

export default MovieDisplay