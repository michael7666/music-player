import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"


const Player = ({currentSongs, isPlaying, setIsPlaying,setSongs, audioRef, setSongInfor, songInfor, songs, setCurrentSongs}) => {

    const playSongHandler = () => {
      if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    }
    const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
     setSongInfor({...songInfor, currentTime: e.target.value})
    }
    const activeLibraryHandler = (nextPrev) => {
      const newSong = songs.map((song) =>{
        if(song.id === nextPrev.id){
            return{
              ...song,
              active: true
            }
        }else{
            return{
                ...song,
                active: false
            }
        }
    })
    setSongs(newSong);
    }
    const skipTrackHandler = async (direction) =>{
     let currentIndex = songs.findIndex((song) => song.id === currentSongs.id);
     if(direction === "skip-forward"){
     await  setCurrentSongs(songs[(currentIndex + 1) % songs.length])
     activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
     }
     if(direction === "skip-back"){
       if((currentIndex -1) % songs.length === -1) {
        await setCurrentSongs(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1])
         if(isPlaying) audioRef.current.play();
         return;
       }
     await setCurrentSongs(songs[(currentIndex - 1) % songs.length])
     activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
     }
      if(isPlaying) audioRef.current.play();
    }
    const getTime = (time) =>{
     return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
     );
    }

    const trackAnim = {
      transform: `translateX(${songInfor.animationPercentage}%)`
    }
  
    return(
        <div className="player">
         <div className="time-control">
             <p>{getTime(songInfor.currentTime)}</p>
             <div style={{background: `linear-gradient(to right, ${currentSongs.color[0]}, ${currentSongs.color[1]})`}} className="track">
             <input min={0} max={songInfor.duration || 0} value={songInfor.currentTime} onChange={dragHandler} type="range"
             
             />
             <div style={trackAnim} className="animate-track"></div>
             </div>
             
             <p>{songInfor.duration ? getTime(songInfor.duration) : "0:00"}</p>
         </div>
         <div className="play-control">
         <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} className="skip-back" size="2x" icon={faAngleLeft} />
             <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={isPlaying ?  faPause : faPlay} />
             <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")} className="skip-forward" size="2x" icon={faAngleRight} />
         </div>
        
        </div>
    )
}

export default Player