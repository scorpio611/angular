import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ProfileComponent,
    FontSizeEditorComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
