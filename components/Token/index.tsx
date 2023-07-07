import { getSession } from 'next-auth/react';

export default async function GetToken() {
	const session = await getSession();
	const { access_token } = session?.user as any;
	return access_token;
}
