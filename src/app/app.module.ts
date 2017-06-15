import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
declarations: [
AppComponent,
HeroesComponent,
HeroDetailComponent
],
imports: [
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
