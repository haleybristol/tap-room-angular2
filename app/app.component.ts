import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div *ngFor="#keg of kegs" class="container">
      <h1>Bailey's Tap Room App</h1>
      <h4>{{ keg.name }}</h4>
      <h4>{{ keg.brand}}</h4>
      <h4>{{ keg.price }}</h4>
      <h4>{{ keg.alContent }}</h4>
      <h4>{{ keg.pintsLeft }}</h4>
    </div>
  `
})
export class KegComponent {
    public keg: Keg;
    constructor(){
    this.keg = new Keg("The Abyss", "Deschutes", "5", "11.5", 0);
  }
}





export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: string, public alContent: string, public id: number) {
}
}
