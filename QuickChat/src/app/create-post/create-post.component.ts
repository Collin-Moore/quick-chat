import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['../shared/common.scss','./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
