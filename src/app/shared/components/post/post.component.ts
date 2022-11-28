import { PostModel } from './../../model/post-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'em-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
