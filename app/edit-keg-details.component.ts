import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <h3>Edit Keg:</h3>
    <div class="keg-form">
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form"/>
      <input [(ngModel)]="keg.alContent" class="col-sm-8 input-lg keg-form"/>
      <input [(ngModel)]="keg.pintsLeft" class="col-sm-8 input-lg keg-form"/>
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
