export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

interface IncrementAction {
  type: typeof INCREMENT_COUNTER;
}

export type CounterActionTypes = IncrementAction;
