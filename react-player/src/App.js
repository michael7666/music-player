
import Player from "./component/Player"
import Song from "./component/Song"
import Library from "./component/Library"
import Nav from "./component/Nav"
import "./style/app.scss"
import data from "./data"
import React, { useState, useRef } from "react"



function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSongs, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfor, setSongInfor] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
})
const [libraryStatus, setlibraryStatus] = useState(false)
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration
  const roundedCurrect = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation= Math.round((roundedCurrect / roundedDuration) * 100)
  setSongInfor({...songInfor, currentTime: current, duration: duration, animationPercentage: animation})

}
const songEndedHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSongs.id);
  await  setCurrentSongs(songs[(currentIndex + 1) % songs.length])
  if(isPlaying) audioRef.current.play();
  
}
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus}/>
       <Song currentSongs={currentSongs} />
       <Player setIsPlaying={setIsPlaying} setSongInfor={setSongInfor} setSongs={setSongs} setCurrentSongs={setCurrentSongs} songInfor={songInfor} songs={songs} isPlaying={isPlaying} currentSongs={currentSongs} audioRef={audioRef} />
       <Library audioRef={audioRef} songs={songs} libraryStatus={libraryStatus} setCurrentSongs={setCurrentSongs} isPlaying={isPlaying} setSongs={setSongs}/>
       <audio onTimeUpdate={timeUpdateHandler} onEnded={songEndedHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSongs.audio}></audio>
    </div>
  );
}

export default App;
