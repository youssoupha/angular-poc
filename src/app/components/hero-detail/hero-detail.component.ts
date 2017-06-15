import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {};
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.findHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  navBack(): void {
    this.location.back();
  }
}
