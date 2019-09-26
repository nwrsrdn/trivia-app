import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HighscoreService } from '../../service/highscore.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    error: boolean = false;


    constructor(private router: Router, private highscore: HighscoreService) { }

    ngOnInit() {
    }

    startGame(name: string): void {
        if (name) {
            this.highscore.add(name);
            setTimeout(() => {
                this.router.navigate(['/questions']);
            }, 1000);
        }
        this.error = true;
    }

}
