'use client';
import React from 'react';
import Home from './home/page';
import { useSession } from 'next-auth/react';
import Account from './account/page';

const Supper = () => {
	const { status } = useSession();
	return (
		<>
			{status === 'authenticated' && <Home />}
			{status === 'loading' && <p>Loading...</p>}
			{status === 'unauthenticated' && <Account />}
		</>
	);
};

export default Supper;
