import { Component, Input OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-appareils',
  templateUrl: './mes-appareils.component.html',
  styleUrls: ['./mes-appareils.component.scss']
})
export class MesAppareilsComponent implements OnInit
{
  @Input() mesAppareilsName:string;
  @Input() mesAppareilsStatus: string;

  constructor()
  {

  }
  ngOnInit()
  {

  }
  getStatus()
  {
    return this.mesAppareilsStatus;
  }
  getColor()
  {
    if(this.mesAppareilsStatus === 'allumé')
    {
      return 'green';
    }
    else if(this.mesAppareilsStatus === 'éteint')
    {
      return 'red';
    }
  }
}
