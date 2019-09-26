export class Question {
    category: string;
    question: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers: string[];
    choices: string[] | null;
}
