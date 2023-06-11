export default class Track {
    id: string;
    user_id: string;
    name: string;
    author: string;
    image: string;
    audio: string;
    length_time: number;
    number_of_plays: number;
    number_of_likes: number;
    number_of_comments: number;
    created_at: string;
    description: string;
    isPrivate: boolean;

    constructor() {
        this.id = '';
        this.user_id = '';
        this.name = '';
        this.author = '';
        this.image = '';
        this.audio = '';
        this.length_time = 0;
        this.number_of_plays = 0;
        this.number_of_likes = 0;
        this.number_of_comments = 0;
        this.created_at = '';
        this.description = '';
        this.isPrivate = false
    }
}
