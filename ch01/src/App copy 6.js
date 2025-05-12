import './App.css';
import React, { useState } from 'react';
//이건 +1 -1 리셋 100으로 리셋 만든거 

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const minus = () => {
    setCount(count - 1);
    console.log(count);
  };

  const resetToZero = () => {
    setCount(0);
  };

  const resetToHundred = () => {
    setCount(100);
  };

  return (
    <div className="my-container">
      <p>Count: {count}</p>
      <div className="button-row">
        <button onClick={increment}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={resetToZero}>0</button>
        <button onClick={resetToHundred}>100</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
