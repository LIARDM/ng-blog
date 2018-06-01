import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    isAuth = false;
    lastUpdate = new Promise((resolve, reject) =>
    {
      const date = new Date();
      setTimeout(
          () =>
          {
            resolve(date)
          }, 2000
        );
    });
    blogPosts=
    [
      {
        title : 'Mon premier post',
        content : 'Le contenu de mon premier post !',
        loveIts : 1,
        created_at : '31/05/2018 9:50 AM'
      },
      {
        title : 'Mon second post',
        content : 'Le contenu de mon deuxième post.',
        loveIts : -1,
        created_at : '31/05/2018 9:50 AM'
      },
      {
        title : 'Encore un post',
        content : 'Ce qui nous fait trois posts normalement.',
        loveIts : 0,
        created_at : '31/05/2018 9:50 AM'
      },
    ];

    appareils=
      [
        {
          name : 'Machine à laver',
          status : 'éteint'
        },
        {
          name : 'Réfrigirateur',
          status : 'allumé'
        },
        {
          name : 'Ordinateur',
          status : 'éteint'
        }

      ];
    constructor()
    {
      setTimeout(
        () =>
        {
          this.isAuth = true;
        }, 4000
      );
    }
    onAllumer()
    {
      console.log('On allume tout !')
    }
}
