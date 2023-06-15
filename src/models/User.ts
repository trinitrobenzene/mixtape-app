export default class User {
    id: string
    name: string
    email: string
    is_admin: boolean
    number_of_followers: number
    number_of_plays: number
    number_of_reported: number
    created_at: string
    password: string

    constructor() {
        this.id = '';
        this.name = '';
        this.email = '';
        this.is_admin = false;
        this.number_of_followers = 0;
        this.number_of_plays = 0;
        this.number_of_reported = 0;
        this.created_at = '';
        this.password = '';
    }
}