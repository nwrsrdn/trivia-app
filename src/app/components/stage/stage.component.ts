import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

    difficulty: string;

    constructor(private router: Router) { }

    ngOnInit() {
        this.difficulty = this.router.url.split('/')[2];
        setTimeout(() => {
            this.router.navigate(['/question/1']);
        }, 4500);
    }

}
