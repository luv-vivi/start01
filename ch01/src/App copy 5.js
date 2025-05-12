
import './App.css';
import React,{useState}from 'react';

const MyComponent = () => {
  const [count,setCount]=useState(0);
  // let count = 0; // useState를 사용하지 않음

  const increment = () => {
    setCount(count+1);
    
    //count += 1; // 값은 증가하지만, 리렌더링이 발생하지 않음
    console.log(count); // 콘솔에는 증가된 값이 보이지만, UI에는 반영되지 않음
  };

  return (
    <div>
      <p>Count: {count}</p> {/* UI가 업데이트되지 않음 */}
      <button onClick={increment}>Increment</button>
    </div>
  );
};


function App() {


  return <div>
    <MyComponent></MyComponent>

  </div>

}

export default App;



