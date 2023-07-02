'use client';
import Link from 'next/link';
import style from '@/src/styles/card.module.scss';
import { PlayCircleFill } from 'react-bootstrap-icons';

const Playlist = () => {
    return (
        <Link className={style.card} href={'/'} shallow>
            <div className="bg-green-200 rounded-md w-[144px] h-[144px]"></div>
            <div className="mt-4 w-[144px]">
                <p className="font-semibold garage-title">{'Chill Mix'}</p>
                <p className="text-sm">Đen, Suni Hạ Linh and more...</p>
            </div>
            <div className={style.dummy}>
                <button className='bg-white rounded-full'>
                    <PlayCircleFill color="green" size={36} />
                </button>
            </div>
        </Link>
    );
};

export default Playlist;
