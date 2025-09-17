import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksService } from './books.service';
import { BookSearchStore } from './books.store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [RouterLink],
  standalone: true,
})
export class BooksComponent {
  books = inject(BooksService).getAllBooks();
  readonly store = inject(BookSearchStore);

  tmpBook = { label: 'Learn Qwik', id: 1 };
  currentBookId = signal(1);
  currentBook = signal(this.tmpBook);

  setIsLoading(): void {
    this.store.setIsLoading(true);
  }

  setId(): void {
    this.currentBookId.set(2);
  }
  derivedId = computed(() => {
    console.log('computed ID');
    return this.currentBookId() + 1;
  });
  updateCurrentBook(): void {
    this.tmpBook.label = 'learn Angular';
    this.currentBook.update(() => this.tmpBook);
  }
}
