import './App.css';
import { logger1, logger2 } from './utils/logger';
import Observable from './utils/observable';

const observable = new Observable();
observable.subscribe(logger1);
observable.subscribe(logger2);

function App() {
  const handleClick = () => {
    observable.notify('Hello World');
  };

  return (
    <div className='App'>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
