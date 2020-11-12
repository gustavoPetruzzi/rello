import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        SharedModule,
        LoginRoutingModule
    ],
})

export class LoginModule { }
