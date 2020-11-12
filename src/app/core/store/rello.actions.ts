import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/models/user';
import { Card } from '../../models/card';

export const getCards = createAction('[Board component] Get Cards');
// export const onGetSuccess = createAction('[Board component], onGetSuccess');
export const addCard = createAction('[Board component] Add Card', props<{ newCard: Card }>());
export const onAddSuccess = createAction('[Board component] on Add success', props<{ newCard: Card }>());
export const onAddFailed = createAction('[Board component] onAddFailed', props<{ errorMsg: string }>());

export const updateCard = createAction('[Board component] update Card', props<{ updatedCard: Card }>());
export const onUpdateSuccess = createAction('[Board component] onUpdateSuccess', props<{ updatedCard: Card }>());

export const removeCard = createAction('[Board component] Remove Card', props<{ cardId: number }>());
export const onRemove = createAction('[BoardComponent], onRemoveCard', props<{ removeCardId: string }>());

// Login Actions
export const login = createAction('[Login component] Login', props<{ user: User }>());
export const onLoginSuccess = createAction('[Login component] onLoginSuccess', props<{ token: string }>());
export const onLoginFailed = createAction('[Login Component] onLoginFailed');
export const logout = createAction('[Login component] Logout');
export const onLogoutSuccess = createAction('[Login component] onLogout');

// SignUp Actions
export const signup = createAction('[Signup component] Signup', props<{ user: User }>());
export const onSignupSuccess = createAction('[Signup component] onSignupSuccess');
export const onSignupFailed = createAction('[Signup component] onSignupFailed', props<{ errorMsg: string }>());


