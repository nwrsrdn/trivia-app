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

    constructor(private highscoreService: HighscoreService) { }

    ngOnInit() {
        this.getHighscores();
    }

    getHighscores(): void {
      this.highscoreService.getHighscores().subscribe(highscores => this.highscores = highscores);
    }
}
