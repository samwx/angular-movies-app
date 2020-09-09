import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/AppRoutingModule';

import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HeaderComponent } from './header/header.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MoviesListComponent,
    HeaderComponent,
    FilterBoxComponent,
    HomeComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
