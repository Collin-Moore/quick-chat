import { Injectable } from '@angular/core';
import { Author } from "app/models/author";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";

@Injectable()
export class AuthorService {
  readonly authorsPath = "authors";

  public authorMapStream: FirebaseObjectObservable<Map<string, Author>>;

  constructor(private db: AngularFireDatabase) {
    this.authorMapStream = this.db.object(this.authorsPath);
  }

  updateAuthor(authorKey: string, displayName: string, photoUrl: string) {
    const author = new Author({
      displayName: displayName,
      photoUrl: photoUrl
    });
    this.db.object(`/${this.authorsPath}/${authorKey}`).set(author);
  }

}
