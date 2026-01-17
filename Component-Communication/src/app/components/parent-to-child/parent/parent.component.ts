import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  Parent Works!
  <app-child [ChildData] ="data"></app-child>
`
})
export class ParentComponent {
  data : string = "hello";

}
