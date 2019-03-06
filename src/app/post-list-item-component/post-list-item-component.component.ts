import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postName: string;
  @Input() postDescription: string;
  @Input() postLike: number;
  @Input() postDisLike: number;
  @Input() postDate: Date;
  reputation: boolean;

  constructor() { }

  ngOnInit() {
    this.reputation=this.isItLiked();
  }

  disLike() {
    this.postDisLike++;
    this.reputation =this.isItLiked();
    console.log(this.reputation);
  }

  like() {
    this.postLike++;
    this.reputation = this.isItLiked();
    console.log(this.reputation);
  }

  isItLiked(){
    return  this.reputation = this.postLike >= this.postDisLike;
  }
}
