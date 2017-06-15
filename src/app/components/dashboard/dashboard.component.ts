import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../model/hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.findHeroes().then(heroesFromSvc => this.heroes = heroesFromSvc.slice(0, 4));
  }
}
