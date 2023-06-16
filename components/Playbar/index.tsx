'use client';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import React from 'react';
import Playbar from './Playbar';

const IndexPlaybar = () => {
    const { user } = useAppSelector(_ => _);
    return !user.logged ? <></> : <Playbar />;
};

export default IndexPlaybar;
