import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((m) => m.usersRoutes),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.routes').then((m) => m.booksRoutes),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.homeRoutes),
  },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

