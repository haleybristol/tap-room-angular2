import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';


//The Root////////////////////////////////////
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <h1>Bailey's Tap Room App</h1>
    <div class="container">
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
        <button>Sell a Pint</button>
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
    new Keg("The Abyss", "Deschutes", "5", "11.5", 0),
    new Keg("Mirror Pond", "Deschutes", "5", "6.5", 1),
    new Keg("Old Chub", "Oskar Meyer Blue's", "4", "6.5", 2),
    new Keg("Apocalypse", "10 Barrel", "5", "7.5", 3),
    new Keg("Citrus Mistress", "Hop Valley", "6", "7", 4)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
