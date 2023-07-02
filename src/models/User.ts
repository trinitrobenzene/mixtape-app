export default class User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    numberOfPlays: number;
    numberOfFollowings: number;
    numberOfFollowers: number;
    numberOfReports: number;
    createdAt: string;
    password: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.email = '';
        this.isAdmin = false;
        this.numberOfPlays = 0;
        this.numberOfFollowings = 0;
        this.numberOfFollowers = 0;
        this.numberOfReports = 0;
        this.createdAt = '';
        this.password = '';
    }
}
