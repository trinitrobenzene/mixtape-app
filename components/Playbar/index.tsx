'use client';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { PlayCircle, SkipStart, SkipEnd, Shuffle, Repeat, VolumeUp } from 'react-bootstrap-icons'

const Playbar = () => {
    const [volumn, setVolumn] = useState(45);
    const { user } = useAppSelector(_ => _)

    if (!user.logged) {
        return <></>;
    }

    const onChange = (value: number) => {
        setVolumn(value);
        console.log(volumn)
    }

    return (
        <div className='flex gap-8 items-center justify-between bg-main z-10 text-white fixed bottom-0 left-0 right-0 px-12 py-6'>
            <figure>
                <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
            </figure>
            <div>
                <div className='flex gap-4 px-8'>
                    <Shuffle size={24} />
                    <SkipStart size={24} />
                    <PlayCircle size={24} />
                    <SkipEnd size={24} />
                    <Repeat size={24} />
                </div>
                <progress className="progress progress-warning w-full bg-stone-200 h-2" value={60} max="100"></progress>
            </div>
            <div className='flex gap-4'>
                <VolumeUp size={24} />
                <input
                    type="range"
                    min={0}
                    max="100"
                    className="range range-warning bg-stone-200"
                    onChange={(e) => onChange(Number(e.target.value))}
                />
            </div>
        </div>
    )
}

export default Playbar