import { useState, useEffect, useRef, useCallback } from "react";

// icons
import {
  SkipEndFill,
  SkipStartFill,
  SkipForwardFill,
  SkipBackwardFill,
  PlayFill,
  PauseFill,
  VolumeDownFill,
  VolumeUpFill,
  VolumeMuteFill,
} from "react-bootstrap-icons";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef: any = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev: any) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="flex justify-between items-center py-1 -ml-4">
      <div className="flex justify-between">
        <button className="p-4" onClick={handlePrevious}>
          <SkipStartFill size={24}/>
        </button>
        <button className="p-4" onClick={skipBackward}>
          <SkipBackwardFill size={24}/>
        </button>
        <button className="p-4" onClick={togglePlayPause}>
          {isPlaying ? <PauseFill size={24}/> : <PlayFill size={24}/>}
        </button>
        <button className="p-4" onClick={skipForward}>
          <SkipForwardFill size={24}/>
        </button>
        <button className="p-4" onClick={handleNext}>
          <SkipEndFill size={24}/>
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <VolumeMuteFill size={24}/>
          ) : volume < 40 ? (
            <VolumeDownFill size={24}/>
          ) : (
            <VolumeUpFill size={24}/>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e: any) => setVolume(e.target.value)}
          style={{
            background: `linear-gradient(to right, #b700ffd2 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
