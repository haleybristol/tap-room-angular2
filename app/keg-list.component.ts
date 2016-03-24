import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';

//Child of the Root/////////////////////////////


@Component({
    selector: 'keg-list',
    inputs: ['kegList'],
    outputs: ['onKegSelect'],
    directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
    template: `
      <div class="display-container">
        <keg-display  *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
        </keg-display>
        <edit-keg-details *ngIf="selectedKeg"     [keg]="selectedKeg">
        </edit-keg-details>
        <new-keg
          (onSubmitNewKeg)="createKeg($event)">
        </new-keg>
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
    createKeg(drake: any):void {
      this.kegList.push(new Keg(drake[0], drake[1], drake[2], drake[3], this.kegList.length ));
    }
  }
