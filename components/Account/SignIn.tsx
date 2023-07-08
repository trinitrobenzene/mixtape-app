'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Notice, showElements } from '@/src/utils/account';

const SignInPage = ({ callback }: { callback: Function }) => {
	const route = useRouter();
	const [infor, setInfor] = useState({ password: '', email: '' });
	const onSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (!infor.email || !infor.password) {
			Notice({
				title: 'Warning',
				message: 'Missing email or password!',
				type: 'warning',
			});
			return;
		}

		const resp = await signIn('credentials', {
<<<<<<< HEAD
			email: 'blue@mail.com',
			password: '123',
=======
			email: infor.email,
			password: infor.password,
>>>>>>> 2d2668caede49808ad6d47f7ced8d9021b46da39
			redirect: false,
			callbackUrl: '/',
		});

		if (resp) {
			if (resp.ok) {
				showElements();
				route.replace('/');
			} else if (resp.error) {
				Notice({
					title: 'Error',
					message: resp.error,
					type: 'warning',
<<<<<<< HEAD
					time: 2000,
=======
					time: 2000
>>>>>>> 2d2668caede49808ad6d47f7ced8d9021b46da39
				});
				return;
			}
		}
	};

	const onSetInfor = (e: React.BaseSyntheticEvent) => {
		const { name, value } = e.target;
		setInfor({ ...infor, [name]: value });
	};

	return (
		<form onSubmit={onSubmit}>
			<h3>Đăng nhập đê</h3>
			<div className="form-control w-full py-3">
				<label className="label">
					<span className="label-text">Your email</span>
				</label>
				<input
					value={infor.email}
					onChange={onSetInfor}
					type="email"
					name="email"
					placeholder=""
					className="input input-bordered w-full"
				/>
			</div>
			<div className="form-control w-full py-3">
				<label className="label">
					<span className="label-text">Your password</span>
				</label>
				<input
					type="password"
					name="password"
					value={infor.password}
					onChange={onSetInfor}
					placeholder=""
					className="input input-bordered w-full"
				/>
			</div>
			<div>
				<p>
					Don't have account?
					<button
						className="btn btn-link"
						onClick={() => callback(false)}
						type="button"
					>
						Sign Up here!
					</button>
				</p>
				<div className="flex justify-end pt-5">
					<button className="btn btn-outline btn-primary" type="submit">
						Sign In
					</button>
				</div>
			</div>
		</form>
	);
};

export default SignInPage;
