import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public HeroNames :string[] =  ['Thor','Hulk','Thanos','Wakanda','Loki'];
  public DeleteHero? :string ='';

  deleteLastHero(){
  const heroeEliminado = this.HeroNames.pop();
  this.DeleteHero=heroeEliminado;
  }

}
