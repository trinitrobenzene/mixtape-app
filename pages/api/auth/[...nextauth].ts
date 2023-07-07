'use client';
import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export let tk = '';

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
					email: 'red@mail.com';
					password: '123';
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
					if (resp.status === 200 || resp.status === 201) {
						const data = await resp.data;
						tk = data.access_token;
						console.log(tk);
						return data;
					}
				} catch (error: any) {
					// console.log(error);
					throw new Error(error.response.data.message);
				}
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
			/**
			 * token = {
				email: 'gray@mail.com',
				sub: '649fee4e94db8cfc83643fff',
				access_token: '...',
				id: '649fee4e94db8cfc83643fff',
				iat: 1688652502,
				exp: 1691244502,
				jti: '13c7cfb7-21b2-40f2-8614-b1606da59cc3'
				}
			 * user = {
				access_token: '...',
				email: 'gray@mail.com',
				id: '649fee4e94db8cfc83643fff'
				}
			 * account = {
				providerAccountId: '648ec1afb139d0adfe1e0643',
				type: 'credentials',
				provider: 'credentials'
				}
			 */
			return { ...token, ...user };
		},
		async session({ session, token }) {
			/**
			 * session = { 
			 	user: { name: undefined, email: 'gray@mail.com', image: undefined },
  				expires: '2023-08-05T14:10:00.137Z'
			}
			* token = {
				email: 'red@mail.com',
				sub: '648ec1afb139d0adfe1e0643',
				access_token: '...',
				id: '648ec1afb139d0adfe1e0643',
				iat: 1688652692,
				exp: 1691244692,
				jti: '7acef96a-675c-4650-be6f-79d9a7c2ecb2'
			}
			* user = undefined
			*/
			session.user = token;
			return session;
		},
	},
};

export default NextAuth(authOptions);
