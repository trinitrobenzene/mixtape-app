export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/', '/songlist', '/songpage', '/upload', '/library'],
};
