import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { getCards, addCard, removeCard, updateCard } from './rello.actions';
import { Card } from '../../models/card';
import { mockedCards } from './cards.mocks';
export interface BoardState{
    cards: Card[];
}

export const initialState = {
    cards : mockedCards
};

const selectAllCards = createFeatureSelector<BoardState>('board');

export const selectCards = createSelector(
    selectAllCards,
    (state: BoardState) => state.cards
);

const _relloReducer = createReducer(initialState,
    on(getCards, state => ({
        ...state
    })),
    on(addCard, (state, { newCard }) => ({
        ...state,
        cards: [...state.cards, newCard]
    })),
)

export function relloReducer(state, action) {
    return _relloReducer(state, action);
}