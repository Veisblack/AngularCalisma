import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-childb3',
  template: `

  <p>childb3 e veri ulaştı</p>
  {{ChildData}}
  
  
  `
})
export class Childb3Component {
  @Input() ChildData: string = '';

}
