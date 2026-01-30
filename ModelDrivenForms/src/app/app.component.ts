import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  frm : FormGroup
  constructor(private formBuilder : FormBuilder) {
    this.frm = formBuilder.group({
      name:[""],
      surname: [""],
      email: [""],
      tel: [""]
    });
  }

  onSubmit(data: {name: string, surname: string, email: string, tel: number}) {
    console.log(data);
  }
}
