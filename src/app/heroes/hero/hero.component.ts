import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name :string = 'Doctor Strange';
public age : number = 25;

get NameCaptitalizad (){
  return this.name.toUpperCase();
}

get NameAgeUnion (){
  return `${this.name} - ${this.age}`
}

 changeName () {
this.name='Loki';
}

changeAge ()  {
  this.age=30;
}

}
