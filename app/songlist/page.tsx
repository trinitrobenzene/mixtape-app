import { Container } from "postcss";
import React from "react";
import AudioPlayer from "@/components/Audio-Player/AudioPlayer";
import Songs from "@/components/Songs";
// css
import "../../styles/index.css";
import "../../styles/customize-progress-bar.css";
const SongList = () => {
  return (
    <div className="grid grid-rows-2 ">
      <div>
        <AudioPlayer></AudioPlayer>
      </div>
      <div>
        <Songs></Songs>
      </div>
    </div>
  );
};

export default SongList;
