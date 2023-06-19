import Artist from '@/components/Card/Artist';
import Playlist from '@/components/Card/Playlist';
import React from 'react';

const Library = () => {
    return (
        <>
            <section id="playlist" className="my-8">
                <h2 className="py-4">Library</h2>
                <div className="flex gap-6">
                    <div className="bg-stone-200 rounded-md w-[360px] h-[300px]"></div>
                    {[1, 2, 3, 4].map(i => (
                        <Playlist key={i} />
                    ))}
                </div>
            </section>
            <section id="artist" className="my-8">
                <h2 className="py-4">Artist</h2>
                <div className="flex gap-6">
                    {[1, 2, 3, 4].map(i => (
                        <Artist
                            key={i}
                            name="YOASOBI"
                            href="/"
                            description="Artist"
                        />
                    ))}
                </div>
            </section>
            <section id="album" className="my-8">
                <h2 className="py-4">Album</h2>
                <div className="flex gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <Playlist key={i} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Library;
