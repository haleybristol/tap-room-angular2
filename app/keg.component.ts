import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';


//Child to KegListComponent/ Granchild of The Root //////////////////////////////////

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
