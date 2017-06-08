import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.fetchHeroes();
  }
  fetchHeroes(): void {
    this.heroService.findHeroes().then(retrievedHeroes => this.heroes = retrievedHeroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
