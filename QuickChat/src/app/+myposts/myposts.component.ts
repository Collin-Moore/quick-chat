import { Component, OnInit } from '@angular/core';
import { PostService } from "app/services/post.service";

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.scss']
})
export class MypostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.showOnlyMyPosts(true);
  }

}
