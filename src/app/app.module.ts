import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MesAppareilsComponent } from './mes-appareils/mes-appareils.component';
import { FormsModule } from '@angular/forms';
import { BlogPostsComponent } from './blog-posts/blog-posts.component'

@NgModule({
  declarations: [
    AppComponent,
    MesAppareilsComponent,
    BlogPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{

}
