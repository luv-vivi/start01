
import './App.css';
import React, { useState } from 'react';

//마우스를 올리거나 벗어날 때 배경색이 변하는 예제입니다.

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div>
      <h1>마우스 이벤트</h1>
      <div
        style={{ width: "200px", height: "100px", backgroundColor: bgColor, textAlign: "center", lineHeight: "100px" }}
        onMouseEnter={() => setBgColor("lightblue")}
        onMouseLeave={() => setBgColor("white")}
      >
        마우스를 올려보세요!
      </div>
    </div>
  );
}

export default App;

