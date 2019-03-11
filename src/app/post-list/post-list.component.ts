import { Subject, Subscription } from 'rxjs';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postItems:  Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService, private router: Router) { 
    this.postSubscription = this.postService.postSubject.subscribe(
      (post: Post[]) => {
        this.postItems = post;
      }

    );
    this.postService.emitPost();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
