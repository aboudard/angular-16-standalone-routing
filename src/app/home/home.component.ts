import { JsonPipe } from '@angular/common';
import { Component, computed, inject, viewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StuffComponent } from './stuff/stuff.component';
import { CounterActions } from '../actions/counter.actions';
import { MachinViewchildComponent } from '../components/machin-viewchild/machin-viewchild.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, StuffComponent, JsonPipe, MachinViewchildComponent],
})
export class HomeComponent {

  machin = viewChild(MachinViewchildComponent);
  machinText = computed(() => this.machin()?.getMachin());

  store = inject(Store);
  model = {
    name: null,
    range: 2,
  };
  onSubmit(formData: any) {
    console.log('Etat model', this.model);
    console.log('Form data', formData.value);
  }

  incrementCount() {
    this.store.dispatch(CounterActions.increment());
  }
}
