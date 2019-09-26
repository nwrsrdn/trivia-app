import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    start: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    startGame(): void {
        this.start = true;
        setTimeout(() => {
            this.router.navigate(['/questions']);
        }, 3000);
    }

}
