// audio thumbnails
import st from './images-st.jpg';
import st1 from './images-1.jpg';
import st2 from './images-2.jpg';
import st3 from './images-3.jpg';
import Track from '@/src/models/Track';
export const tracks = new Array<Track>(
	{
		id: '1',
		author_id: 'ha',
		name: 'Chac Ai Do Se Ve',
		src: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
		author: 'Son Tung',
		image: st,
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
		author_id: 'ha',
		name: 'Co don',
		src: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
		author: 'Hoai Linh',
		image: st1,
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
		author_id: 'b',
		name: 'Chieu',
		src: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
		author: 'Messi',
		image: st2,
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
		author_id: 'b',
		name: 'Chieu',
		src: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
		author: 'Cr7',
		image: st3,
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
