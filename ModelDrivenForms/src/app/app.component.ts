import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  frm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required]],
      surname: ["Gedikli"],
      email: ["serkangedikli2002@gmail.com"],
      tel: ["5531036816"],

      address: formBuilder.group({
        country: [""],
        city: [""],
        adress: [""]
      })
    });

    this.frm.get("name").valueChanges.subscribe({ // bu şekilde formda
      next: data => {                  // herhangi bir değişiklik olduğunda yakalar
        console.log(data);
      }
    })
  }



  onSubmit(data: { name: string, surname: string, email: string, tel: number }) {
    console.log(data);
  }

  ok() {
    this.frm.get("name").setValue("Serkan", { onlySelf: true })
  }
}
