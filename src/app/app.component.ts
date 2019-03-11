import { Post } from './models/post.model';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blogito';

  constructor() {
    const config = {
      apiKey: "AIzaSyAOBkKTib71ePm1-azMw-ULa8zFveLPSDk",
      authDomain: "blogito-74a4e.firebaseapp.com",
      databaseURL: "https://blogito-74a4e.firebaseio.com",
      projectId: "blogito-74a4e",
      storageBucket: "blogito-74a4e.appspot.com",
      messagingSenderId: "990996293156"
    };
    firebase.initializeApp(config);
  }
}
