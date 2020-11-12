import { select, Store } from '@ngrx/store';
import { selectCards, BoardState } from '../store/rello.reducer';
// import { addCard, getCards, updateCard, removeCard } from '../store/rello.actions';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class BoardSandbox {
    cards$ = this.boardState$.pipe(
        select(selectCards)
    );

    constructor(private boardState$: Store<BoardState>) {
    }

    /** 
     * Check if an user is logged in
     * @return {boolean} return true if User is loggedIn
     */
    public isLoggedIn() : boolean{
        return !localStorage.getItem('token');
    } 

}