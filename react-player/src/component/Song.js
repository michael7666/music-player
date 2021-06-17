import React from "react"


const Songer = ({currentSongs}) => {
    return(
        <div className="song-container">
           <img src={currentSongs.cover} alt={currentSongs.name}></img>
           <h2>{currentSongs.name}</h2>
           <h3>{currentSongs.artist}</h3>
        </div>
    )
}

export default Songer