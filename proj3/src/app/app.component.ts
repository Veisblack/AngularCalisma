import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *appCustomif = "false">
    merhaba
  </div>
  <ul>
    <li *appCustomfor = "names;let name; let i = index">{{name}} - {{i}}</li>
  </ul>`
})


export class AppComponent {
  title = 'proj3';
  names: string[] = ["ahmet", "mehmet", "rıfkı", "fırat"];
}

