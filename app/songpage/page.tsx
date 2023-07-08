import React from 'react';
import AudioPlayer from '@/components/Audio-Player/AudioPlayer';
import Image from 'next/image';
// css
import '../../styles/index.css';
import '../../styles/customize-progress-bar.css';
import img from '../../data-test/avatars/image-juliusomo.png';
import { People, Cassette } from 'react-bootstrap-icons';
import Comments from '@/components/Comments/Comments';

const SongPage = () => {
<<<<<<< HEAD
	return (
		<div className="grid grid-rows-1">
			<div className="absolute flex animate-slideup">
				<AudioPlayer></AudioPlayer>
			</div>
			{/* <div className="h-100 bottom-0 left-0 right-0">
=======
  return (
    <div className="grid grid-rows-1">
      <div className="absolute flex animate-slideup">
        <AudioPlayer></AudioPlayer>
      </div>
      <div className="h-100 bottom-0 left-0 right-0">
>>>>>>> 2d2668caede49808ad6d47f7ced8d9021b46da39
        <div className="grid grid-cols-2">
          <div className="flex flex-col bg-white m-3 py-6 rounded-lg space-y-3 relative h-fit">
            <div className="flex justify-center p-8">
              <Image src={img} alt="track cover" width={100} height={100} />
            </div>
            <span className="flex justify-center"> Nguyen Huu Thang</span>
            <div className="flex justify-around grid-cols-2">
              <div>
                <People width={150} />
              </div>
              <Cassette width={150} />
            </div>
          </div>
          <div>
            <Comments></Comments>
          </div>
        </div>
      </div> */}
		</div>
	);
};

export default SongPage;
