import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <input type="text" [ngClass]="cl">

  `,
  // Angular 15'te 'styleUrls' (dizi olarak) kullanılır.
  styles: [".myclass{background-color:red}"]
})
export class AppComponent{
cl : string = "myclass";

}
