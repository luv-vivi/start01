
import './App.css';

// 자식 컴포넌트에 클릭이벤트를 다르게 실행하고 싶을 때 

function ChildComponent(props) {
  return (
    <div>
      ChildComponent<br />
      <button onClick={props.onClick}>클릭하세요</button>
    </div>
  );
}


function App() {
  const handleHello = () => {
    alert("hello");
  }

  const handleworld = () => {
    alert("world");
  }

  return <div>

    <ChildComponent onClick ={handleHello}/><br />
    <ChildComponent onClick ={handleworld}/><br />
    <ChildComponent onClick ={()=>{
        alert("arrow function")}
        }/><br/>
  </div>

}

export default App;



