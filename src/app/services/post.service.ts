import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  publications: Post[];
  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
    this.getPost();
  }

   emitPost() {
     this.postSubject.next(this.publications);
   }

   savePost() {
      firebase.database().ref('/post').set(this.publications);
   }

   savePostLike(id: number, postToSave: Post) {
    return new Promise(
      (resolve, reject) => {
        const postToEdit = firebase.database().ref('post/' + id);
        postToEdit.set(postToSave).then(
          ()=> {
            this.emitPost();
            console.log('post like updated !');
          },
          (error) => {
            console.log('Error when update likes: ' + error);
          }
        );
      }
    );
   }
   getPost(){
     firebase.database().ref('/post')
     .on('value', (data: firebase.database.DataSnapshot) => {
      this.publications = data.val() ? data.val() : [];
      this.emitPost();
      }
    );
   }

   getSinglePost(id: number) {
     return new Promise(
       (resolve, reject) => {
         firebase.database().ref('post/' + id).once('value').then(
          (data: firebase.database.DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
         );
       }
     );
   }

   removePost(postToRemove: Post) {
    const postToRemoveIndex = this.publications.findIndex(
      (postX) => {
        if (postX === postToRemove) {
          return true;
        }
      }
    );

    this.publications.splice(postToRemoveIndex, 1);
    this.savePost();
    this.emitPost();
   }

   createNewPost( newPost: Post) {
    if(newPost != null) {
      this.publications.push(newPost);
      this.savePost();
      this.emitPost();
    } else {
      console.log('createNewPost ERROR CREATE POST: POST WAS NULL');
    }
   }


}
