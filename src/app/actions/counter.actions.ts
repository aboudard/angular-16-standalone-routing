import { createActionGroup, emptyProps } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Load Counters': emptyProps(),
    Increment: emptyProps(),
  },
});
