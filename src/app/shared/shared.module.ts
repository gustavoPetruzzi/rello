import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './ui/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class SharedModule { }
