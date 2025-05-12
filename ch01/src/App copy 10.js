import './App.css';
import React, { useState } from 'react';

//사용자가 입력하면, 입력한 값을 실시간으로 화면에 표시하는 예제입니다. 
// + ChangeApp 자식 컴퍼넌스 만들어 추가 + 입력 생기면 입력숫자가 올라가는거 추가 생기게 하기 

function ChangeApp(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(props.onChange());
  };

  return (
    <div>
      <h1>입력 필드 이벤트</h1>
      <input type="text" onChange={handleChange} placeholder="입력하세요" />
      <input type="text" onChange={props.onChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
    </div>
  );
}
function App() {
  let counter=1;
  return (
    <div>
      <ChangeApp onChange={(event)=>{
        return counter++;

      }}></ChangeApp>
    </div>
  );
}
export default App;