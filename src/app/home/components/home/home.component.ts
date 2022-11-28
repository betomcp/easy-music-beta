import { PostModel } from './../../../shared/model/post-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: PostModel[] = [];
  public newPostOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.posts.push(new PostModel());
    this.posts[0].text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  }

  togleNewPost(event?: boolean){
    this.newPostOpen = !this.newPostOpen;
  }

  publish(event: PostModel){
    this.posts.push(event);
  }

}
