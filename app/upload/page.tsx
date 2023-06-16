'use client';
import Audio from '@/components/Upload/Audio';
import Infor from '@/components/Upload/Infor';
import { useState } from 'react';

const UploadPage = () => {
    const [stage, setStage] = useState(0);
    const [files, setFiles] = useState<FileList>();

    const props = {
        callback: setStage,
        files,
        setFiles,
    };

    return (
        <div>
            <h1>Upload your tracks</h1>
            {stage === 0 && <Audio {...props} />}
            {stage === 1 && <Infor {...props} />}
        </div>
    );
};

export default UploadPage;
