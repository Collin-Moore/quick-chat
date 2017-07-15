import { FirebaseFlatSnapshot } from "app/models/firebase-flat-snapshot";

export class Post extends FirebaseFlatSnapshot {
    public authorKey: string;
    public body: string;

    constructor(obj?: any) {
        super(obj);
        this.authorKey = obj && obj.authorKey || "";
        this.body = obj && obj.body || "";
    }
}