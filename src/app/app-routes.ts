import { Routes } from '@angular/router';

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
  {
    path: 'mark',
    loadComponent: () => import('./mark/mark.component').then((m) => m.MarkComponent)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./404/404.component').then((m) => m.NotFoundComponent),
  },
];
