import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
})
export class BooksComponent {
  currentBookId = signal(1);
  setId(): void {
    this.currentBookId.set(2);
  }
}
