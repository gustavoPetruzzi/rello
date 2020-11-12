import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { 
    getCards,
    addCard,
    login,
    onAddSuccess,
    onLoginSuccess,
    removeCard,
    updateCard,
    signup,
    onSignupSuccess,
    onSignupFailed,
    onAddFailed,
} from './rello.actions';
import { Card } from '../../models/card';
import { mockedCards } from './cards.mocks';

export function getError(callState: CallState): string | null { 
    if ((callState as ErrorState).errorMsg !== undefined) { 
        return (callState as ErrorState).errorMsg;
    } 
    return null;
}

export const enum LoadingState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED'
}

export interface ErrorState {
    errorMsg: string;
}

export type CallState = LoadingState | ErrorState;

export interface BoardState{
    cards: Card[];
    callState: CallState;
    isLoggedIn: boolean;
}

export const initialState = {
    cards : mockedCards,
    isLoggedIn: false,
    callState: LoadingState.INIT,
    isLoggedin: false,
};

const selectAllCards = createFeatureSelector<BoardState>('board');

export const selectCards = createSelector(
    selectAllCards,
    (state: BoardState) => state.cards
);

const _relloReducer = createReducer(initialState,
    on(getCards, state => ({
        ...state,
        callState: LoadingState.LOADED
    })),
    on(addCard, (state) => ({
        ...state,
        callState: LoadingState.LOADING,
    })),
    on(onAddSuccess, (state, { newCard }) =>({
        ...state,
        cards: [...state.cards, newCard],
        callState: LoadingState.LOADED
    })),
    on(onAddFailed, (state, { errorMsg }) => ({
        ...state,
        callState: errorMsg,
    })),

    // Login

    on(login, state => ({
        ...state,
        callState: LoadingState.LOADING
    })),
    on(onLoginSuccess, state => ({
        ...state,
        callState: LoadingState.LOADED,
    })),

    // Signup
    on(signup, state => ({
        ...state,
        callState: LoadingState.LOADING
    })),

    on(onSignupSuccess, state => ({
        ...state,
        callState: LoadingState.LOADED
    })),

    on(onSignupFailed, (state, { errorMsg }) => ({
        ...state,
        callState: errorMsg
    })),
)

export function relloReducer(state, action) {
    return _relloReducer(state, action);
}