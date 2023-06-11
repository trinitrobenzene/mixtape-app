import Link from 'next/link';
import React from 'react';

const Row = () => {
    const imgUrl =
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/5/6/4/6564372bd4a9df8add0125fe9fe4b226.jpg';
    const data = [
        {
            name: 'Bài hát 1',
            id: 1,
            img: 'empty',
            url: 'songlist',
            descript: 'Aliqua ad esse aliquip ea minim ad.',
        },
        {
            name: 'Bài hát 2',
            id: 2,
            img: 'empty',
            url: 'songlist',
            descript: 'Aliqua ad esse aliquip ea minim ad.',
        },
        {
            name: 'Bài hát 3',
            id: 3,
            img: 'empty',
            url: 'songlist',
            descript: 'Aliqua ad esse aliquip ea minim ad.',
        },
        {
            name: 'Bài hát 4',
            id: 4,
            img: 'empty',
            url: 'songlist',
            descript: 'Aliqua ad esse aliquip ea minim ad.',
        },
    ];
    return (
        <div className="py-4">
            <h5 className="font-semibold">Được phát gần đây</h5>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {data.map((d) => (
                    <div
                        className="col-auto rounded-lg shadow-xl p-3"
                        key={d.id}
                    >
                        <figure>
                            <img src={imgUrl} alt="" width={'w-full'} />
                        </figure>
                        <div className="card-body p-0 mt-2">
                            <h5 className="font-semibold text-lg">
                                <Link href={d.url} shallow>
                                    {d.name}
                                </Link>
                            </h5>
                            <p className="garage-title">{d.descript}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Row;
