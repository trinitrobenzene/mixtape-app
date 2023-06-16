import React, { useEffect, useRef, useState } from 'react';
import style from '@/src/styles/upload.module.scss';
import { X } from 'react-bootstrap-icons';

interface eProps {
    callback: Function;
    files: FileList | undefined;
    setFiles: Function;
}

const Audio = (props: eProps) => {
    const { files, setFiles, callback } = props;
    const filesRef = useRef<HTMLInputElement>(null);

    const removeFile = (i: number) => {
        /**
         * Remove the selected file in files.
         */
        if (files) {
            const dt = new DataTransfer();
            for (let index = 0; index < files.length; index++) {
                if (index !== i) dt.items.add(files[index]);
            }
            setFiles(dt.files);
        }
    };

    const onDrogFile = (event: any) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files);
    };

    const onSetFiles = (event: React.BaseSyntheticEvent) => {
        /**
         * Get files from drag input and check the extension files
         * Only accept if extension files is mp3
         */
        if (event.target.files) {
            const input = event.target.files;
            for (const item of input) {
                const itemExt = item.name.split('.')[1];
                if (itemExt !== 'mp3') {
                    console.log('This file is not supported!');
                    return;
                }
            }
            setFiles(input);
        }
    };

    const onSubmitFiles = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(files);
        // if files is not null, go to step 1.
        if (files) callback(1);
    };

    return (
        <form className="my-6" onSubmit={onSubmitFiles}>
            <div
                className={style.dropzone}
                onDragOver={e => e.preventDefault()}
                onDrop={onDrogFile}
            >
                <p>Drag and drop your tracks & albums here</p>
                <input
                    className="overflow-hidden"
                    type="file"
                    name="tracks"
                    multiple
                    hidden
                    ref={filesRef}
                    onChange={onSetFiles}
                />
                <button
                    type="button"
                    onClick={() => filesRef.current?.click()}
                    className="btn btn-outline btn-primary my-8 max-w-[240px]"
                >
                    Click to choose files
                </button>
            </div>
            <p className="mb-6 text-sm text-gray-400">
                Note: Provide FLAC, WAV, or ALAC for highest audio quality.
            </p>
            <div className={style.fileszone}>
                <ol className="list-decimal">
                    {files &&
                        Array.from(files).map((file, i) => (
                            <li key={i}>
                                {file.name}
                                <button
                                    className="float-right"
                                    onClick={() => removeFile(i)}
                                >
                                    <X color="red" />
                                </button>
                            </li>
                        ))}
                </ol>
                <div className="col-span-1 flex gap-4 justify-end">
                    <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => setFiles(undefined)}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                        Continue
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Audio;
