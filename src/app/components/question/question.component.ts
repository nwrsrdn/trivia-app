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
            this.questions = this.questionService.organizeQuestion(question);
            console.log(this.questions.correct_answer);
        });
    }

    getFinalAnswer(final_answer): void {
        let answer: boolean = this.questionService.checkAnswer(final_answer, this.questions.correct_answer);
        console.log(answer);
    }

}
