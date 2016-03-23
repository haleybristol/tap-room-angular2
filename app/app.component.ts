import { Component, EventEmitter } from 'angular2/core';

//Children////////////////////////////////////

@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
    <h3>{{ task.description }}</h3>
  `
})

export class TaskComponent {
  public task: Task;
}



  @Component({
    selector: 'keg-list',
    inputs: ['kegList'],
    outputs: ['onKegSelect'],
    template: `
    <div *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" class="container">
      <h4>{{ currentKeg.name }}</h4>
      <h4>Brewery:{{ currentKeg.brand }}</h4>
      <h4>$ {{ currentKeg.price }}</h4>
      <h4>Alcohol% {{ currentKeg.alContent }}</h4>
      <h4>Pints left: {{ currentKeg.pintsLeft }}</h4>
    </div>
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


//Parent////////////////////////////////////
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
