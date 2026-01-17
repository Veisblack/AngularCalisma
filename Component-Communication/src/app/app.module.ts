import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent-to-child/parent/parent.component';

import { ChildComponent } from './components/parent-to-child/child/child.component';
import { ChildComponent as ChildComponent2 } from './components/child-to-parent/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/child-to-parent/parent/parent.component';
import { Parent3Component } from "./components/child-to-child-Communition/parent3/parent3.component";
import { Childa3Component } from './components/child-to-child-Communition/childa3/childa3.component';
import { Childb3Component } from './components/child-to-child-Communition/childb3/childb3.component';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentComponent2,
    ChildComponent2,
    Parent3Component,
    Childa3Component,
    Childb3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
