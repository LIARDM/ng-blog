import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    blogPosts=
    [
      {
        title : 'Mon premier post',
        content : 'Le contenu de mon premier post !',
        loveIts : 1,
        created_at : new Date()
      },
      {
        title : 'Mon second post',
        content : 'Le contenu de mon deuxième post.',
        loveIts : -1,
        created_at : new Date()
      },
      {
        title : 'Encore un post',
        content : 'Ce qui nous fait trois posts (normalement).',
        loveIts : 0,
        created_at : new Date()
      },
    ];

    constructor()
    {}
}
