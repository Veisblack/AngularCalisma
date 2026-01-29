import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { console } from 'node:inspector';

@Component({
  selector: 'app-example',
  template: `
  Example <br>
  <input type="text" [(ngModel)]= "data"> <br>
  <ng-content></ng-content>
  `
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
OnDestroy{
  
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges");
  }

  ngOnInit(): void {
    console.log("2. ngOnInit");
  }

  ngDoCheck(): void {
    console.log("3. ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("4. AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("5. AfterContentCheck");
  }

  ngAfterViewInit(): void {
    console.log("6. AfterViewInit");
  }

   ngAfterViewChecked(): void {
    console.log("7. AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("8. OnDestroy");
  }
  

}
