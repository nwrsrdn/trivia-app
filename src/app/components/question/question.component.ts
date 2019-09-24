import { Component, OnInit } from '@angular/core';

import { Question } from '../../classes/question';
import { QuestionService } from '../../service/question.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    questions: Question;

    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        this.getQuestion();
    }

    getQuestion(): void {
        this.questionService.getQuestion().subscribe((question) => {
            let result = question.results;
            console.log(result);
            this.questions = result;
            console.log(this.questions);
        });
    }

}
