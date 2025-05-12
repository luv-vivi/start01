
import './App.css';

// 고정된 형태의 클릭이벤트 추가되는 자식 컨포넌트 만들기

function ChildComponent() {
  const handleButtonClick = () => {
    alert("Button clicked!"); // 고정된 기능 추가
  };

  return (
    <div>
      ChildComponent<br />
      <button onClick={handleButtonClick}>클릭!!</button>
    </div>
  );
}

// 1. 버튼 클릭 이벤트 추가하기
function App() {
  const handlerClick = () => {
    alert("클릭되었습니다!@!");

  }
  return <div>
    Hello React! <br></br>
    <button onClick={handlerClick}>클릭</button><br/>
    <ChildComponent/><br/>
    <ChildComponent/><br/>
  </div>

}

export default App;


// 자식 컴포넌트에 클릭이벤트를 다르게 실행하고 싶을 때 
