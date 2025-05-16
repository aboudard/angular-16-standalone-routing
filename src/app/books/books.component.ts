import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
})
export class BooksComponent {
  tmpBook = {label: 'Learn Qwik', id: 1};
  currentBookId = signal(1);
  currentBook = signal(this.tmpBook)
  setId(): void {
    this.currentBookId.set(2);
  }
  derivedId = computed(() => {
    console.log('computed ID');
    return this.currentBookId() + 1;
  })
  updateCurrentBook(): void {
    this.tmpBook.label = 'learn Angular';
    this.currentBook.update(() => this.tmpBook)
  }
}
