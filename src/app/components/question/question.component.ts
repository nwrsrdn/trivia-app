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
    final_answer: string;

    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        this.getQuestion();
    }

    getQuestion(): void {
        this.questionService.getQuestion().subscribe((question) => {
            this.questions = this.questionService.organizeQuestion(question);
        });
    }

    getFinalAnswer(): void {
        let answer: boolean = this.questionService.checkAnswer(this.final_answer, this.questions.correct_answer);

    }

}
