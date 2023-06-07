import Image from "next/image";
import { tracks } from "@/data-test/tracks";

interface Props {
  item: any;
  itemIndex: number;
}

const Song = ({ item: track, itemIndex }: Props) => {
  return (
    <div className="grid grid-cols-2 text-gray-500 px-5 py-4 hover:bg-white rounded-lg cursor-pointer">
      <div className="flex items-center space-x-4">
        <p>{itemIndex + 1}</p>
        <div>
          <Image
            src={track?.thumbnail || ""}
            alt="track cover"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="w-36 lg:w-72 truncate text-black">{track?.title}</p>
          <p className="w-40">{track?.author}</p>
        </div>
      </div>

      <div className="flex justify-between items-center ml-auto md:ml-0"></div>
    </div>
  );
};

export default Song;
