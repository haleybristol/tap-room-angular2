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
    this.keg = [
    new Keg("The Abyss", "Deschutes", "5", "11.5", 0);
    new Keg("Mirror Pond", "Deschutes", "5", "6.5", 1);
    new Keg("Old Chub", "Oskar Meyer Blue's", "4", "6.5", 2);
    new Keg("Apocalypse", "10 Barrel", "5", "7.5", 3);
    new Keg("Citrus Mistress", "Hop Valley", "6", "7", 4);
  }
}





export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: string, public alContent: string, public id: number) {
}
}
