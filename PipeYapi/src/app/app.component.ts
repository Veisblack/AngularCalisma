import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: `
  {{name | custom : 1:5}}
  `
})

export class AppComponent {
  name = 'Serkan';
  constructor(private custom : CustomPipe) {
    console.log(custom.transform("asdfghjk", 5, 8));
  }
}
