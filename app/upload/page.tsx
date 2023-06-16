'use client';
import Audio from '@/components/Upload/Audio';
import Infor from '@/components/Upload/Infor';
import { useState } from 'react';

const UploadPage = () => {
    const [stage, setStage] = useState(0);

    return (
        <div>
            <h1>Upload your tracks</h1>
            {stage === 0 && <Audio next={() => setStage(1)} />}
            {stage === 1 && <Infor prev={() => setStage(0)} />}
        </div>
    );
};

export default UploadPage;
