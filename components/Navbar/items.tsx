import {
	HouseDoorFill,
	CollectionFill,
	Upload,
	ChatLeftFill,
	Newspaper,
	HeartFill,
} from 'react-bootstrap-icons';

const links = [
	{
		name: 'Home',
		icon: <HouseDoorFill size={24} />,
		url: '/',
		active: false,
	},
	{
		name: 'Feed',
		icon: <Newspaper size={24} />,
		url: '/',
		active: false,
	},
	{
		name: 'Library',
		icon: <CollectionFill size={24} />,
		url: '/library',
		active: false,
	},
	{
		name: 'Upload Song',
		icon: <Upload size={24} />,
		url: '/upload',
		active: false,
	},
	{
		name: 'Liked Song',
		icon: <HeartFill size={24} />,
		url: '/',
		active: false,
	},
	{
		name: 'Chat',
		icon: <ChatLeftFill size={24} />,
		url: '/',
		active: false,
	},
];

export default links