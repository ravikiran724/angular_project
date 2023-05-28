import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FilterComponent} from './app.component.filter'

import {MovieDisplay} from './app.component.MovieDisplay'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, FilterComponent, MovieDisplay
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
