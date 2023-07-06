'use client';
import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				try {
					const resp = await axios.post(
						'http://localhost:4000/authen/login',
						{
							email,
							password,
						},
						{
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					if (resp.status === 200 || resp.status === 201)
						return await resp.data;
				} catch (error: any) {
					// console.log(error);
					throw new Error(error.response.data.message);
				}

				/* if (email === 'red@mail.com' && password === '123') {
                    const url1 = `http://localhost:4000/user/648ec1afb139d0adfe1e0643`;
                    const url2 = 'https://jsonplaceholder.typicode.com/users/1';
                    const resp = await fetch(url2);
                    const data = await resp.json();
                    return {
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        isAdmin: false,
                        token: code[0],
                    };
                } else if (email === 'blue@mail.com' && password === '123') {
                    const url1 = `http://localhost:4000/user/648ec1afb139d0adfe1e0643`;
                    const url2 = 'https://jsonplaceholder.typicode.com/users/2';
                    const resp = await fetch(url2);
                    const data = await resp.json();
                    return {
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        phone: data.phone,
                        isAdmin: true,
                        token: code[1],
                    };
                } else {
                    throw new Error('Undefined user...');
                } */

				/* const resp = await fetch('http://localhost:4001/authen/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
                });
                console.log(resp);

                if (resp.ok) {
                    const res = await resp.json();
                    return res;
                }
                return null; */
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/account',
		signOut: '/account',
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			session.user = token;
			return session;
		},
	},
};

export default NextAuth(authOptions);
