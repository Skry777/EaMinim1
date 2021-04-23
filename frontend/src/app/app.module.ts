import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmacosListComponent } from './farmacos-list/farmacos-list.component';
import { FarmacoCardComponent } from './farmaco-card/farmaco-card.component';
import { FarmacoFormComponent } from './farmaco-form/farmaco-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FarmacosListComponent,
    FarmacoCardComponent,
    FarmacoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
