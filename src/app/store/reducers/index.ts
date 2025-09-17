import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  [fromCounter.counterFeatureKey]: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
