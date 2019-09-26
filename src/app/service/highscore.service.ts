import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Highscore } from '../classes/highscore';
import { HIGHSCORES } from '../mock-data/mock-highscores';

@Injectable({
    providedIn: 'root'
})
export class HighscoreService {

    name: string;
    total_score: number = 0;

    constructor() { }

    getHighscores(): Observable<Highscore[]> {
        return of(HIGHSCORES);
    }

    add(name: string): void {
        HIGHSCORES.push({
            name: this.name,
            total_score: this.total_score
        });
    }
}
