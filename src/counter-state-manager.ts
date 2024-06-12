// src/rxduxStore.ts

// Import the easyStateManager function from rxdux-state-manager
import { easyStateManager } from 'rxdux-state-manager';
interface ICounter {
  counters: [number, number, number]
}
// Initialize the state manager with an initial state
let initialState: ICounter = {
  // Initial state with an array of three counters
  counters: [0, 0, 0],
}
const LOCAL_STORAGE_KEY = "counter-state"

const stringifiedState = localStorage.getItem(LOCAL_STORAGE_KEY);
if (stringifiedState) {
  const state = JSON.parse(stringifiedState)
  initialState = state;
}

export const {
  useStateManager: useGlobalState, // Hook to use state in components
  $state: $globalState, // RxJS BehaviorSubject to access the current state
  updateState: updateGlobalState, // Function to update the state
} = easyStateManager<ICounter>(initialState);


// Define actions to manipulate the state
class CounterActions {
  constructor() {
    $globalState.subscribe((value:ICounter) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value))
    })
  }
  // Action to increment a counter by its index
  increment = (index: number) => {
    updateGlobalState((draft) => {
      draft.counters[index]++;
    });
  }
  // Action to decrement a counter by its index
  decrement = (index: number) => {
    updateGlobalState((draft) => {
      draft.counters[index]--;
    });
  }
  // Action to reset all counters to zero
  reset = () => {
    updateGlobalState((draft) => {
      draft.counters = [0, 0, 0];
    });
  }
};

export const counterActions = new CounterActions();