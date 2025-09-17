import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getCount } from '../../store/selectors/counter.selectors';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  store = inject(Store);
  count$ = this.store.pipe(select(getCount))
}
