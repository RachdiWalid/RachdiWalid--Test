import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmsListComponent } from './films-list/films-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
