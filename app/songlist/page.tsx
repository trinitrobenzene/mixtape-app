import { Container } from "postcss";
import React from "react";
import AudioPlayer from "@/components/Audio-Player/AudioPlayer";
import Songs from "@/components/Songs";
// css
import "../../styles/index.css";
import "../../styles/customize-progress-bar.css";
const SongList = () => {
  return (
    <div className="grid grid-rows-3 ">
      <div className="flex flex-col bg-white m-3 rounded-lg space-y-3 relative h-fit">
        <AudioPlayer></AudioPlayer>
      </div>
      <div className="bg-white m-3 rounded-lg space-y-3 relative">
        <Songs></Songs>
      </div>
    </div>
  );
};

export default SongList;
