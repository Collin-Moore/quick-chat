import { FirebaseFlatSnapshot } from "app/models/firebase-flat-snapshot";

export class Author extends FirebaseFlatSnapshot {
    public displayName: string;
    public photoUrl: string;

    constructor(obj?: any) {
        super(obj);
        this.displayName = obj && obj.displayName || "";
        this.photoUrl = obj && obj.photoUrl || "";
    }
}
