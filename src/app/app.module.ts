import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FilterComponent} from './app.component.filter'

import {MovieDisplay} from './app.component.MovieDisplay'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MovieListComponent} from "./app.component.movielist";


@NgModule({
  declarations: [
    AppComponent, FilterComponent, MovieDisplay, MovieListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
