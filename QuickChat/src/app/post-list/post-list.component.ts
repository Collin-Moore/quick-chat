import { Component, OnInit } from '@angular/core';
import { PostService } from "app/services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(public postService: PostService) {
    
   }

  ngOnInit() {
  }

}
