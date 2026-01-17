import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <p>Child Component</p>
  
  
  `
})
export class ChildComponent implements OnInit{
  @Output() dataEvent = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.dataEvent.emit({
      message: 'merhaba'
    })
  }

 

}
