import { createReducer, on } from '@ngrx/store';
import { getCards, addCard, removeCard, updateCard } from './rello.actions';
import { Card } from '../models/card';

export interface BoardState{
    cards: Card[];
}

