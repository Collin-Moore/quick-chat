import { Injectable } from '@angular/core';
import { Post } from "app/models/post";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class PostService {

  readonly postsPath = "posts";
  private _postStream: FirebaseListObservable<Post[]>;

  constructor(private db: AngularFireDatabase) {
    this._postStream = this.db.list(this.postsPath);
  }

  add(post: Post) {
    console.log("Pushing the post", post);
    this._postStream.push(post);
  }
}
