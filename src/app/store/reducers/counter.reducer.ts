import { createReducer, on } from '@ngrx/store';
import { CounterActions } from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const reducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    count: state.count + 1,
  }))
);
