import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonToggleModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatProgressBarModule,
        MatChipsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatProgressBarModule,
        MatChipsModule,
    ]
})
export class MaterialModule { }
