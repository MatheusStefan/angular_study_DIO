import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) {
    
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}