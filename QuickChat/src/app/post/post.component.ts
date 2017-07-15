import { Component, OnInit, Input } from '@angular/core';
import { Post, PostWithAuthor } from "app/models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../shared/common.scss','./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postWithAuthor: PostWithAuthor;

  constructor() { }

  ngOnInit() {
  }

}
