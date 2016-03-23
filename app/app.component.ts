import { Component, EventEmitter } from 'angular2/core';

//Grandchild////////////////////////////////////

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}</h3>
    <h3>{{ keg.brand }}</h3>
    <h3>{{ keg.price }}</h3>
    <h3>{{ keg.alContent }}</h3>
    <h3>{{ keg.pintsLeft }}</h3>
  `
})

export class KegComponent {
  public keg: Keg;
}


//Child/////////////////////////////
  @Component({
    selector: 'keg-list',
    inputs: ['kegList'],
    outputs: ['onKegSelect'],
    directives: [KegComponent],
    template: `
    <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
    </keg-display>
    `
  })

  export class KegListComponent {
    public kegList: Keg[];
    public onKegSelect: EventEmitter<Keg>;
    public selectedKeg: Keg;
    constructor() {
      this.onKegSelect = new EventEmitter();
    }
    kegClicked(clickedKeg: Keg): void {
      console.log(clickedKeg);
      this.selectedKeg = clickedKeg;
      this.onKegSelect.emit(clickedKeg);
    }
  }


//Parent aka The Root////////////////////////////////////
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <h1>Bailey's Tap Room App</h1>
    <div class="container">
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
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

//Model////////////////////////////////////

export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: string, public alContent: string, public id: number) {
  }
}
