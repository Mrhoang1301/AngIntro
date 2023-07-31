import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent{
  posts:Array<any>=[]
  constructor(private postService: PostService){
    this.posts=postService.postList
  }
  addNewData(){
    let newPost:Post = {
      id:6,
      postTitle:'Post 6',
      date:Date()
    }
    this.postService.addData(newPost)
  }
}


