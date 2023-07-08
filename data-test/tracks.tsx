// audio thumbnails
import st from './images-st.jpg';
import st1 from './images-1.jpg';
import st2 from './images-2.jpg';
import st3 from './images-3.jpg';
import Track from '@/src/models/Track';
export const tracks = new Array<Track>(
	{
		id: '1',
		userUpload: 'ha',
		name: 'Chac Ai Do Se Ve',
		trackFile: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
		author: 'Son Tung',
		coverImage: st,
		length_time: 120,
		number_of_plays: 2,
		number_of_likes: 3,
		number_of_comments: 5,
		created_at: '15/02/2023',
		description: '',
		isPrivate: false,
	},
	{
		id: '2',
		userUpload: 'ha',
		name: 'Co don',
		trackFile: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
		author: 'Hoai Linh',
		coverImage: st1,
		length_time: 120,
		number_of_plays: 2,
		number_of_likes: 3,
		number_of_comments: 5,
		created_at: '15/02/2023',
		description: '',
		isPrivate: false,
	},
	{
		id: '3',
		userUpload: 'b',
		name: 'Chieu',
		trackFile: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
		author: 'Messi',
		coverImage: st2,
		length_time: 205,
		number_of_plays: 2,
		number_of_likes: 6,
		number_of_comments: 5,
		created_at: '10/05/2023',
		description: '',
		isPrivate: false,
	},
	{
		id: '4',
		userUpload: 'b',
		name: 'Chieu',
		trackFile: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
		author: 'Cr7',
		coverImage: st3,
		length_time: 200,
		number_of_plays: 2,
		number_of_likes: 11,
		number_of_comments: 9,
		created_at: '10/01/2023',
		description: '',
		isPrivate: false,
	}

	// ...
);
