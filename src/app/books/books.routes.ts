import { Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { BookComponent } from "./book/book.component";
import { BookSearchStore } from "./books.store";

export const booksRoutes: Routes = [
  { path: '', component: BooksComponent, providers: [BookSearchStore] },
  { path: ':id', component: BookComponent },
];
