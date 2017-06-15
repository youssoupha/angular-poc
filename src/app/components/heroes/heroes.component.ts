import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.fetchHeroes();
  }
  fetchHeroes(): void {
    this.heroService.findHeroes().then(retrievedHeroes => this.heroes = retrievedHeroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
