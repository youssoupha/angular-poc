import {Component, Input} from '@angular/core';
import {Hero} from './model/hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label for="heroName">name: </label>
        <input id="heroName"
               [(ngModel)]="hero.name"
               placeholder="Heroes's name">
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
