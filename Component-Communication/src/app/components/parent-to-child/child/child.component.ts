import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` 
  <p>child works!</p>
  {{ChildData}}
  `
})
export class ChildComponent {

   @Input() ChildData : any;

}
