import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalLetterValidator } from './Validation/func';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  frm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(3), capitalLetterValidator]],
      surname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      tel: [""],

      address: formBuilder.group({
        country: [""],
        city: [""],
        adress: [""]
      })
    });
  }

  get name() {
    return this.frm.get("name");
  }

  get surname() {
    return this.frm.get("surname");
  }

  get email() {
    return this.frm.get("email");
  }


  onSubmit() {
    console.log(this.frm.valid);
    console.log(this.frm.value);
  }
}
