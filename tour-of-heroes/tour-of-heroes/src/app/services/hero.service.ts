import { Injectable } from '@angular/core';
import { MessageService } from '../services/message.service'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  //show when the search of heroes is completed
  //this.messageService.add('HeroService: fetched heroes');
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    //show the fetched hero id
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
    

    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}





