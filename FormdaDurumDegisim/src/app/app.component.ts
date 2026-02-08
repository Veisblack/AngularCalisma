import { Component, TemplateRef } from '@angular/core';
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

    this.frm.get("name").valueChanges.subscribe({
      next : data => {
        console.log(data);
      }
    })

  }


  onSubmit(data: { name: string, surname: string, email: string, tel: number }) {
    console.log(data);
  }

  markAsTouched() {
    // this.frm.markAsTouched(); // bu butona tıkladığında dokunmuş anlamına gelecek ve durum true olacak
    this.frm.get("name").markAsTouched({onlySelf:true}); // butona basınca name control nu değişmiş kabul edecek 
                                                         // onlySelf parametresiyle buttona tıklayınca sadece name control değişti
                                                         // formun tamamı etkilenmedi
  }

  markAllAsTouched() {
    this.frm.markAllAsTouched();
  }

  markAsUntouched() {
    this.frm.markAsUntouched();
  }

  markAsDirty() {
    this.frm.markAsDirty();
  }

  markAsPristine() {
    this.frm.markAsPristine();
  }

  disable() {
    this.frm.get("name").disable();
  }

  enable() {
    this.frm.get("name").enable();
  }
}
