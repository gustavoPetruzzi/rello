import { Injectable } from '@angular/core';
import { BoardSandbox } from 'src/app/core/sandbox/rello.sandbox';
import { selectCards, BoardState } from '../../core/store/rello.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth/auth.service';
@Injectable({
    providedIn: 'root',
})

export class SignupSandbox  {

    constructor(
        private appState$: Store<BoardState>,
    ) { }

    signup(){
        
    }
}