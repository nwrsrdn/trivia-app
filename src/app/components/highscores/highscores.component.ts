import { Component, OnInit } from '@angular/core';

import { Highscore } from '../../classes/highscore';
import { HighscoreService } from '../../service/highscore.service';

@Component({
    selector: 'app-highscores',
    templateUrl: './highscores.component.html',
    styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {

    highscores: Highscore[];

    columnsToDisplay: string[] = ['name', 'total_score'];

    constructor(private highscoreService: HighscoreService) { }

    ngOnInit() {
        this.getHighscores();
    }

    getHighscores(): void {
      this.highscoreService.getHighscores().subscribe(highscores => this.highscores = highscores);
    }
}
