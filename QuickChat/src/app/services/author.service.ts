import { Injectable } from '@angular/core';
import { Author } from "app/models/author";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AuthorService {
  readonly authorsPath = "authors";

  constructor(private db: AngularFireDatabase) { }

  updateAuthor(authorKey: string, displayName: string, photoUrl: string) {
    const author = new Author({
      displayName: displayName,
      photoUrl: photoUrl
    });
    this.db.object(`/${this.authorsPath}/${authorKey}`).set(author);
  }

}
