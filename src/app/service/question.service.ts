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
            difficulty: 'easy'
        }
    }

    constructor(private http: HttpClient) { }

    getQuestion(): Observable<Question> {
        return this.http.get<Question>(this.questionsUrl, this.params);
    }
}
