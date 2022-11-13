import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { CalcultorComponent } from './calcultor/calcultor.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcultorComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
