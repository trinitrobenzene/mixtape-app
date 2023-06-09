"use client";
import { tracks } from "@/data-test/tracks";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Controls from "../Audio-Player/Controls";
import ProgressBar from "../Audio-Player/ProgressBar";
import DisplayTrackInPlaybar from "../Audio-Player/DisplayTrackInPlaybar";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
  setActiveSong,
  setCurrentIndex,
  setCurrentPlaylist,
  setCurrentTime,
} from "@/src/redux/features/Player";

const Playbar = () => {
  const { player } = useAppSelector((_) => _);
  const [trackIndex, setTrackIndex] = useState(player.currentIndex);
  const [currentTrack, setCurrentTrack] = useState(player.activeSong);
  const [duration, setDuration] = useState(0);
  const playbarStyle = {
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  };
  const dispatch = useAppDispatch();

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();
  useEffect(() => {
    setCurrentTrack(player.activeSong);
    // console.log("sss");
  }, [player]);
  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      dispatch(setCurrentIndex(0));
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
      dispatch(setActiveSong(tracks[0]));
      dispatch(setCurrentTime(0));
    } else {
      if (player.isShuffle) {
        let randomIndex = Math.floor(Math.random() * tracks.length);
        setTrackIndex(randomIndex);
        dispatch(setCurrentIndex(randomIndex));
        setCurrentTrack(tracks[randomIndex]);
        dispatch(setActiveSong(tracks[randomIndex]));
      } else {
        setTrackIndex(trackIndex + 1);
        dispatch(setCurrentIndex(trackIndex + 1));
        setCurrentTrack(tracks[trackIndex + 1]);
        dispatch(setActiveSong(tracks[trackIndex + 1]));
      }
    }
  };
  // console.log(currentTrack);
  return (
    <div
      className="bg-main text-white grid grid-flow-col px-2 md:px-8 auto-cols-1"
      style={{ ...playbarStyle, position: "fixed" }}
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
            tracks,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            handleNext,
          }}
        />
      </div>
      <div className="row-span-2 col-span-2">
        <ProgressBar {...{ progressBarRef, audioRef, duration }} />
      </div>
    </div>
  );
};

export default Playbar;
