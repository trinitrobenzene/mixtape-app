import { StaticImageData } from 'next/image';

export default class Track {
	id: string;
	userUpload: string;
	name: string;
	author: string[] | string;
	coverImage: StaticImageData | string;
	trackFile: string;
	length_time: number;
	number_of_plays: number;
	number_of_likes: number;
	number_of_comments: number;
	created_at: string;
	description: string;
	isPrivate: boolean;

	constructor() {
		this.id = '';
		this.userUpload = '';
		this.name = '';
		this.author = '';
		this.coverImage = '';
		this.trackFile = '';
		this.length_time = 0;
		this.number_of_plays = 0;
		this.number_of_likes = 0;
		this.number_of_comments = 0;
		this.created_at = '';
		this.description = '';
		this.isPrivate = false;
	}
}
