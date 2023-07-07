// audio thumbnails
import st from './images-st.jpg';
import st1 from './images-1.jpg';
import st2 from './images-2.jpg';
import st3 from './images-3.jpg';
import User from '@/src/models/User';

export const tracks = new Array<User>(
	{
		id: '1',
		name: 'Son Tung',
		email: 'mymail@gmail.com',
		avatar: st,
		isAdmin: false,
		numberOfPlays: 3,
		numberOfFollowings: 10,
		numberOfFollowers: 6,
		numberOfReports: 1,
		createdAt: '12/02/2021',
		password: '123',
	},
	{
		id: '2',
		name: 'Messi',
		email: 'mymail123@gmail.com',
		avatar: st,
		isAdmin: false,
		numberOfPlays: 3,
		numberOfFollowings: 10,
		numberOfFollowers: 6,
		numberOfReports: 1,
		createdAt: '12/02/2021',
		password: '123',
	},
	{
		id: '3',
		name: 'Cr7',
		email: 'mymail456@gmail.com',
		avatar: st,
		isAdmin: false,
		numberOfPlays: 3,
		numberOfFollowings: 10,
		numberOfFollowers: 6,
		numberOfReports: 1,
		createdAt: '12/02/2021',
		password: '123',
	}
	// ...
);
