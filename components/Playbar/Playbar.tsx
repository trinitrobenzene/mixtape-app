"use client";
import { tracks } from "@/data-test/tracks";
import Image from "next/image";
import { useState, useRef } from "react";
import Controls from "../Audio-Player/Controls";
import ProgressBar from "../Audio-Player/ProgressBar";
import DisplayTrackInPlaybar from "../Audio-Player/DisplayTrackInPlaybar";

const Playbar = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playbarStyle = {
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  };

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
  return (
    <div 
      className="bg-main text-white grid grid-flow-col items-center px-2 md:px-8 auto-cols-1" 
      style={{...playbarStyle, position:'fixed'}}
    >
      {/* Left */}
      <div className="row-span-3 auto-cols-1">
        <DisplayTrackInPlaybar
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
          }}
        />
      </div>

      {/* Center */}
      <div className="col-span-2">
        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            tracks,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            handleNext,
          }}
        />
      </div>
      <div className="row-span-2 col-span-2">
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </div>
  );
};

export default Playbar;
