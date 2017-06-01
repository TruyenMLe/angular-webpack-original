import { Component, OnInit } from '@angular/core';
import { SnapLightboxService } from 'snap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  testInputModel = {};

  constructor(
      private heroService: HeroService,
      private snapLightboxService: SnapLightboxService
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  openNewRequestModal() {
    this.snapLightboxService.open('new-request-modal');
  }
}

