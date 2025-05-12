import './App.css';
import React, { useState } from 'react';

//사용자가 입력하면, 입력한 값을 실시간으로 화면에 표시하는 예제입니다. + ChangeApp 자식 컴퍼넌스 만들어 추가 

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>입력 필드 이벤트</h1>
      <input type="text" onChange={handleChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
    </div>
  );
}
function ChangeApp() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <ChangeApp></ChangeApp>
    </div>
  );
}
export default App;