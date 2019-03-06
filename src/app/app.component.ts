import { Post } from './models/post.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blogito';
  publications: Post[];

  constructor()
  {
    this.publications = new Array();
    this.publications.push(new Post('Angular est genial.','Voila pourquoi angular est genial.',10,2));
    this.publications.push(new Post('Angular Js est mieu.','Voila pourquoi angularJs est genial.',1,2));
    this.publications.push(new Post('J\'aime Openclassroom.','Voila pourquoi j\'aime OpenClassroom.',30,4));
    this.publications.push(new Post('Je suis indecis.','Voila pourquoi je suis indecis.',5,5));
    this.publications.push(new Post('Tout le monde s\'en fou.','Voila pourquoi tout le monde s\'en fou.',0,0));

  }
  source = [
    {
      name: 'Post 1',
      description: 'Ceci est mon post 1.',
      nbLike: 1,
      nbDisLike: 2
    },
    {
      name: 'Post 2',
      description: 'Ceci est mon post 2.',
      nbLike: 1,
      nbDisLike: 2
    },
    {
      name: 'Post 3',
      description: 'Ceci est mon post 3.',
      nbLike: 1,
      nbDisLike: 2
    }
  ];
}
