import './App.css';
import Counter from './Counter';
import { counterActions } from './counter-state-manager';

function App() {
  return (
    <>
      <div className="App">
        <h1>Simple Counter App</h1>
        <Counter index={0} />
        <Counter index={1} />
        <Counter index={2} />
        <button onClick={counterActions.reset}>Reset All Counters</button>
      </div>
    </>
  );
}

export default App;
