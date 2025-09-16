import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StuffComponent } from './stuff/stuff.component';
import { CounterActions } from '../actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FormsModule, StuffComponent, JsonPipe],
})
export class HomeComponent {
  store = inject(Store);
  model = {
    name: null,
    range: 4,
  };
  onSubmit(formData: any) {
    console.log('Etat model', this.model);
    console.log('Form data', formData.value);
  }

  incrementCount() {
    this.store.dispatch(CounterActions.increment());
  }
}
