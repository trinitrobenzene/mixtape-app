import React from "react";
import AudioPlayer from "@/components/Audio-Player/AudioPlayer";
import Image from "next/image";
// css
import "../../styles/index.css";
import "../../styles/customize-progress-bar.css";
import img from "../../data-test/sample.jpeg";

const SongPage = () => {
  return (
    <div className="grid grid-rows-2 ">
      <div>
        <AudioPlayer></AudioPlayer>
      </div>
      <div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 p-8 bg-white">
            <div className="flex justify-center p-8">
              <Image
                src={img}
                alt="track cover"
                width={100}
                height={100}
                className="rounded-full "
              />
            </div>
            <span className="flex justify-center"> Nguyen Huu Thang</span>
            <div className="flex justify-around grid-cols-2">
              <div>
                <i className="bi bi-people"></i> 123
              </div>
              <div>02</div>
            </div>
          </div>
          <div className="col-span-2 ...">
            <div className="flex">
              <div className="flex-none ...">01</div>
              <div className="flex-1 w-64 ...">02</div>
            </div>
          </div>
          <div className="row-span-2 col-span-2 ...">03</div>
        </div>
      </div>
    </div>
  );
};

export default SongPage;
