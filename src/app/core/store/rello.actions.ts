import {createAction, props} from '@ngrx/store';
import { Card } from '../../models/card';

export const getCards = createAction('[Board component] Get Cards');
export const addCard = createAction('[Board component] Add Card', props<{newCard: Card}>());
// export const onAddSuccess = createAction('[Board component] on Add success',)
export const updateCard = createAction('[Board component] update Card', props<{updatedCard: Card}>());
export const removeCard = createAction('[Board component] Remove Card', props<{cardId: number}>());