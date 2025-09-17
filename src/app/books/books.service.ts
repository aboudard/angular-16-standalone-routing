import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [
    { id: 1, title: 'Angular Basics', author: 'John Doe' },
    { id: 2, title: 'Advanced Angular', author: 'Jane Smith' },
    { id: 3, title: 'RxJS in Action', author: 'Jim Beam' },
    // add more books as needed
  ];

  constructor() {}

  getBookById(id: number): Observable<Book | undefined> {
    const book = this.books.find(b => b.id === id);
    return of(book);
  }

  getBookByIdSignal(id: number): Book | undefined {
    return this.books.find(b => b.id === id);
  }

  getAllBooks(): Book[] {
    return this.books;
  }

}
