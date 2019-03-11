import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './post-list/post-form/post-form.component';

const appRoutes: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'new-post', component: PostFormComponent},
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'post-list' }
];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      PostListItemComponent,
      PostListComponent,
      PostFormComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
      PostService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
