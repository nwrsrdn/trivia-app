import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '../components/index/index.component';
import { StageComponent } from '../components/stage/stage.component';
import { QuestionComponent } from '../components/question/question.component';

const routes: Routes = [
    { path: '' , component: IndexComponent },
    { path: 'stage/:difficulty' , component: StageComponent },
    { path: 'question/:no' , component: QuestionComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
