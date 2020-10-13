import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardRoutingModule } from './board.routing';
import { CardComponent } from './card/card.component';


@NgModule({
    declarations: [
        CardComponent,
        BoardComponent
    ],
    imports: [
        CommonModule,
        BoardRoutingModule
    ],
})

export class BoardModule { }
