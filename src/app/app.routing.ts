import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'board',
        loadChildren: () => import('./containers/board/board.module').then(m => m.BoardModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./containers/signup/signup.module').then(m => m.SignupModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        redirectTo: '/board',
        pathMatch: 'full'
    }
];
