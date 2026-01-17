import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childa3',
  template: `
  <p>Childa3Component</p>
  `
})
export class Childa3Component implements OnInit{
  @Output() dataEvent = new EventEmitter(); 
  
  ngOnInit(): void {
    this.dataEvent.emit({
      mesaj: 'selamlar'
    })
  }

  

}
