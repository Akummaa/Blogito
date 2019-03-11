import { Post } from './../models/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postName: string;
  @Input() postDescription: string;
  @Input() postLike: number;
  @Input() postDisLike: number;
  @Input() postDate: string;
  @Input() id: number;
  balance: number;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
      this.computeBalance();
  }

  disLike() {
    this.postDisLike++;
    this.computeBalance();
    this.onLikeChange();
  }

  like() {
    this.postLike++;
    this.computeBalance();
    this.onLikeChange();

  }

  computeBalance() {
   this.balance = this.postLike - this.postDisLike;
   console.log(this.balance);
  }
  onDelete() {
   const postToRemove = new Post(this.postName,
    this.postDescription,
    this.postLike,
    this.postDisLike);

    postToRemove.postDate = this.postDate;
    this.postService.removePost(postToRemove);
  }
  onLikeChange()
  {

    const postToEdit = new Post(this.postName,
      this.postDescription,
      this.postLike,
      this.postDisLike);
  
      postToEdit.postDate = this.postDate;
    this.postService.savePostLike(this.id, postToEdit);
  }
}
