import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Question } from '../classes/question';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    private questionsUrl: string = 'https://opentdb.com/api.php';
    private params = {
        params: {
            amount: '1' ,
            type: 'multiple' ,
            difficulty: ['medium']
        }
    }

    constructor(private http: HttpClient) { }

    getQuestion(): Observable<Question> {
        return this.http.get<Question>(this.questionsUrl, this.params);
    }

    organizeQuestion(results): Question {
        let incorrects: string[] = results.results[0].incorrect_answers;
        let correct: string = results.results[0].correct_answer;
        return {
            category: results.results[0].category,
            question: this.parseQuestion(results.results[0].question),
            difficulty: results.results[0].difficulty,
            correct_answer: results.results[0].correct_answer,
            incorrect_answers: results.results[0].incorrect_answers,
            choices: this.randomizeChoices(incorrects, correct),
        };
    }

    parseQuestion(question: string) : string {
        let parser = new DOMParser();
        let parsedQuestion = parser.parseFromString(question, 'text/html');
        return parsedQuestion.body.textContent;
    }

    randomizeChoices(incorrects: string[], correct: string): string[] {
        let temp: string;
        let x = Math.floor((Math.random() * 4) + 0);
        if (x === 3) {
            incorrects[3] = correct;
            return incorrects;
        }
        temp = incorrects[x];
        incorrects[x] = correct;
        incorrects[3] = temp;
        return incorrects;
    }

    checkAnswer(final_answer: string, correct_answer: string): boolean {
        return final_answer === correct_answer;
    }
}
