import { PostModel } from './../../../shared/model/post-model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'em-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  @Output() emitPost = new EventEmitter<PostModel>()
  @Output() closeModal = new EventEmitter<boolean>()
  post: PostModel = new PostModel();
  newPostForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newPostForm = this.fb.group({
      postTitle: new FormControl(''),
      postText: new FormControl(''),
    })
  }

  publish(){
    if(this.newPostForm.value.postTitle || this.newPostForm.value.postText){
      if(this.newPostForm.value.postTitle){
        this.post.title = this.newPostForm.value.postTitle;
      }
      if(this.newPostForm.value.postText){
        this.post.text = this.newPostForm.value.postText;
      }
      this.emitPost.emit(this.post);
      this.cancel();
    }
  }

  cancel(){
    this.closeModal.emit();
  }

}
