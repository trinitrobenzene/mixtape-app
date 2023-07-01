"use client";
import { useEffect, useRef, useState } from "react";
import { tracks } from "@/data-test/tracks";

// import components
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import {
  setActiveSong,
  setCurrentIndex,
  setCurrentPlaylist,
} from "@/src/redux/features/Player";

const AudioPlayer = () => {
  // states
  const { player } = useAppSelector((_) => _);
  console.log(player);
  const [trackIndex, setTrackIndex] = useState(player.currentIndex);
  const [currentTrack, setCurrentTrack] = useState(player.activeSong);
  const [duration, setDuration] = useState(0);
  const dispatch = useAppDispatch();
  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();
  useEffect(() => {
    setCurrentTrack(player.activeSong);
    console.log("sss");
  }, [player]);
  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      dispatch(setCurrentIndex(0));
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
      dispatch(setActiveSong(tracks[0]));
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

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl m-auto">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
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
          <ProgressBar {...{ progressBarRef, audioRef, duration }} />
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
