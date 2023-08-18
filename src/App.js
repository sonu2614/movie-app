import React,{ useState } from "react";
import MovieList from "./Components/MovieList";
import MovieDisplay from "./Components/MovieDisplay";

const App = () =>{
    const [selectedMovie,setSelectedMovie]=useState("")

    return(
        <div>
            <h1 style={{fontSize:"80px",color:"red",textAlign:"center"}}>Movie List</h1>
            <MovieList addMovie={setSelectedMovie}/>
            <MovieDisplay movieToBeDisplayed={selectedMovie}/>
        </div>
    )
}

export default App;