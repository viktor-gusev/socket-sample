import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms';
/* Angular Materials */
import { MaterialModule }     from '@angular/material';
/* PrimeNG */
import {
  GalleriaModule,
  DropdownModule,
  ButtonModule,
  TooltipModule,
  DialogModule,
  PasswordModule,
  InputTextModule,
  CheckboxModule,
  InputMaskModule,
  AutoCompleteModule,
  SliderModule
}                           from 'primeng/primeng';
/* Components */
import { AppComp }          from './app.comp';

/* Services */
import { AppService }       from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // Angular Materials
    MaterialModule.forRoot(),
    // PrimeNG
    GalleriaModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    CheckboxModule,
    InputMaskModule,
    AutoCompleteModule,
    SliderModule
  ],
  declarations: [AppComp],
  bootstrap: [AppComp],
  providers: [AppService]
})

export class AppModule {
}