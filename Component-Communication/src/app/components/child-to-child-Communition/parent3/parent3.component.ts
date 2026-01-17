import { Component} from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `

  <div style="background-color:chocolate;">
    <p>APP-PARENT3</p>

  
  <app-childa3 (dataEvent)="childEvent($event)"></app-childa3>

  <app-childb3 [ChildData] ='mesaj'></app-childb3>
  </div>

  `
})

export class Parent3Component {
  mesaj = '';
  
  childEvent(obj:any){
    this.mesaj = obj?.mesaj ?? '';
  }

}
