import { JsonPipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MachinViewchildComponent } from '../components/machin-viewchild/machin-viewchild.component';
import { CounterActions } from '../store/actions/counter.actions';
import { StuffComponent } from './stuff/stuff.component';
import { TestInputComponent } from './test-input/test-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StuffComponent,
    JsonPipe,
    MachinViewchildComponent,
    TestInputComponent
  ],
})
export class HomeComponent {
  machin = viewChild(MachinViewchildComponent);
  machinText = computed(() => this.machin()?.getMachin());

  test = signal('Hello World');
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  store = inject(Store);
  model = {
    name: null,
    range: 2,
  };

  constructor() {}

  increment() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  onSubmit(formData: any) {
    console.log('Etat model', this.model);
    console.log('Form data', formData.value);
  }

  incrementCount() {
    this.store.dispatch(CounterActions.increment());
  }
}
