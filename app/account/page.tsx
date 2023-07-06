'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ReactNotifications } from 'react-notifications-component';

import SignInPage from '@/components/Account/SignIn';
import SignUp from '@/components/Account/SignUp';
import { hideElements } from '@/src/utils/account';
import style from '@/src/styles/account.module.scss';

const Account = () => {
    const { data: session } = useSession();
    const route = useRouter();
    const [signIn, setSignIn] = useState(true);

    useEffect(() => {
        if (session?.user) {
            route.push('/');
        } else {
            hideElements();
        }
    }, [session]);

    return (
        <div className="flex pt-6">
            <div className={style['account-form']}>
                <div className="col-span-1 bg-purple-600 p-6">
                    <h3>Welcome to Mixtape</h3>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit placeat cumque modi repudiandae maiores
                    </p>
                    <button className="btn btn-primary rounded-3xl">
                        Read more
                    </button>
                </div>
                <div className="md:col-span-1 lg:col-span-2 p-6 bg-stone-50">
                    {signIn && <SignInPage callback={setSignIn} />}
                    {!signIn && <SignUp callback={setSignIn} />}
                </div>
            </div>
            <ReactNotifications />
        </div>
    );
};

export default Account;
