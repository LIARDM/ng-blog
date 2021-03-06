import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit
{
  @Input() title:string;
  @Input() content:string;
  @Input() loveIts:number;
  @Input() created_at:Date;

  constructor()
  {
    var date = new Date();
  }
  ngOnInit()
  {

  }

  addLove()
  {
    return this.loveIts ++;
  }
  removeLove()
  {
    return this.loveIts --;
  }

  getLoveItsColorPost()
  {
      if(this.loveIts > 0)
      {
        return 'list-group-item list-group-item-success';
      }
      else if(this.loveIts < 0)
      {
        return 'list-group-item list-group-item-danger';
      }
      else
      {
        return 'list-group-item list-group-item-light';
      }
  }
}
