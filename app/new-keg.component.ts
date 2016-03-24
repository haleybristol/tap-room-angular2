import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
    <div class="new-keg-form">
      <input placeholder="Keg Name" class="col-sm-8 input-lg keg-form" #newName/>
      <input placeholder="Brand" class="col-sm-8 input-lg keg-form" #newBrand />
      <input placeholder="Price" class="col-sm-8 input-lg keg-form" #newPrice/>
      <input placeholder="Alcohol %" class="col-sm-8 input-lg keg-form" #newAlcohol/>

        <button class="add-keg" (click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<any>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    var drake = [userName.value, userBrand.value, userPrice.value, userAlcohol.value]
    this.onSubmitNewKeg.emit(drake);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
  console.log(drake);
}
