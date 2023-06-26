'use client';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import React from 'react';
import Playbar from './Playbar';

const IndexPlaybar = () => {
    // const { user } = useAppSelector(_ => _);
    // return !user.logged ? <></> : <Playbar />;
    return <section id='playbar'><Playbar /></section>
};

export default IndexPlaybar;
