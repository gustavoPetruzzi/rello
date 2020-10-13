import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './ui/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './ui/button/button.component';

@NgModule({
    declarations: [
        InputComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        CommonModule,
        ReactiveFormsModule,
        ButtonComponent
    ]
})

export class SharedModule { }
