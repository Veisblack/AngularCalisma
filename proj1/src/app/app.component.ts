import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, FormsModule],
  // templateUrl: './app.component.html', 
  template: ` 

  <input type="text" [value]="title">

  <button onclick="btnClick(); btnClick2()">Click</button>

  <app-home [pageName]="title"></app-home>
  <!--// two-way data binding-->
  <!-- <input type="text" [(ngModel)]="name"> <br>
  <input type="text" [(ngModel)]="name">
   {{name}} -->
  ` ,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = "Home Page";
  name: string;
  btnClick() {

  }
  btnClick2() {
    
  }

}
