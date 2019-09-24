import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Highscore } from '../classes/highscore';
import { HIGHSCORES } from '../mock-data/mock-highscores';

@Injectable({
    providedIn: 'root'
})
export class HighscoreService {

    constructor() { }

  getHighscores(): Observable<Highscore[]> {
      return of(HIGHSCORES);
  }
}
