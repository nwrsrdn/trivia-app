import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonToggleModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
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
        MatTableModule,
        MatButtonModule,
        MatInputModule
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
        MatTableModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class MaterialModule { }
