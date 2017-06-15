import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock/mock-heroes';

@Injectable()
export class HeroService {
  findHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
