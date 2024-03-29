import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    //takes the mocked heroes, from id 3-6
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
