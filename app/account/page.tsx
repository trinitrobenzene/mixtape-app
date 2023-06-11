'use client';
import React, { useState } from 'react';
import SignIn from '@/components/Account/SignIn';
import SignUp from '@/components/Account/SignUp';

const Account = () => {
    const [signIn, setSignIn] = useState(true);

    return (
        <div className="flex pt-16">
            <div className="p-4 w-4/5 lg:w-3/5 m-auto md:grid md:grid-cols-2 lg:grid-cols-3">
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
                    {signIn && <SignIn callback={setSignIn} />}
                    {!signIn && <SignUp callback={setSignIn} />}
                </div>
            </div>
        </div>
    );
};

export default Account;
