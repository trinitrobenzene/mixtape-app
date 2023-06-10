import { ArrowClockwise } from "react-bootstrap-icons";
import Image from "next/image";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}: any) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="grid gap-4">
        <div className="w-full md:w-auto">
          {currentTrack.thumbnail ? (
            <Image src={currentTrack.thumbnail || ""} alt="track cover" />
          ) : (
            <div className="flex justify-center items-center max-h-fit">
              <span className="flex justify-center items-center bg-slate-300">
                <ArrowClockwise />
              </span>
            </div>
          )}
        </div>
        <div className="text-left text-black">
          <p className="text-left p-2 text-black font-bold text-2xl">
            {currentTrack.title}
          </p>
          <p className="text-left">{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
