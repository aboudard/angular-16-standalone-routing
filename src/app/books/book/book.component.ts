import { Component, computed, inject, input } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  bookService = inject(BooksService);
  id = input.required<string>();
  book = computed(() => this.bookService.getBookByIdSignal(Number(this.id())));
}
