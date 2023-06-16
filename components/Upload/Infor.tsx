import Track from '@/src/models/Track';
import React, { useState } from 'react';

const Infor = ({ prev }: { prev: Function }) => {
    const [tracks, setTracks] = useState<Track>(new Track());

    const onChange = (e: React.SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        if (name === 'isPrivate') {
            setTracks({
                ...tracks,
                [name]: value === '1' ? true : false,
            });
        } else setTracks({ ...tracks, [name]: value });
    };

    const onSubmit = () => {
        console.log(tracks);
    };

    return (
        <div className="col-span-3">
            <h3>More information about your tracks</h3>
            <div>
                <div className="my-6">
                    <label>Title (*)</label>
                    <input
                        value={tracks.name}
                        onChange={onChange}
                        name="title"
                        className="input input-bordered input-sm w-full"
                    />
                </div>
                <div className="my-6">
                    <label htmlFor="description">Description</label>
                    <textarea
                        value={tracks.description}
                        onChange={onChange}
                        name="description"
                        className="textarea textarea-bordered w-full"
                    />
                </div>
                <div className="my-6">
                    <p>Privacy</p>
                    <div className="text-sm flex">
                        <div className="flex gap-3 items-center">
                            <label htmlFor="tracks-public">Public</label>
                            <input
                                type="radio"
                                name="isPrivate"
                                id="tracks-public"
                                value={0}
                                defaultChecked={tracks.isPrivate === false}
                                onClick={onChange}
                            />
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="flex gap-3 items-center">
                            <label htmlFor="tracks-private">Private</label>
                            <input
                                type="radio"
                                name="isPrivate"
                                id="tracks-private"
                                value={1}
                                defaultChecked={tracks.isPrivate === true}
                                onClick={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-end">
                <button className="btn" onClick={()=>prev()}>
                    Cancel
                </button>
                <button onClick={onSubmit} className="btn btn-success">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Infor;
