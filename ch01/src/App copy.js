import logo from './logo.svg';
ㅊ
import utils from './utils';
import { helper1, helper2 } from './utils';
import Button from './Button';
import Counter from './Counter';

function Greeting(){
  return <h1>hello,world</h1>
}

function GreetingProp(props){
  return <h1>{props.name}</h1>
}

function GreetingProps(props){
  return <h1>{props.name}의 나이는 {props.age}입니다.</h1>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];

const divStyles = {
  color:'blue',
  backgroundColor:'lightgrey'
};
const element = <div Styles={divStyles}>Styled element</div>

const divStyle={
  color :'blue',
  backgroundColor:'lightgrey' 
};

function App() {
  // alert(utils());
  // alert(helper1());
  // alert(helper2());
  const name='john';
  const element = <h1>Hello,{name}!</h1>
  return (
    <div className="App">
      Hello React! <br />
      <Button/><Button/><Button/><br/>
      <Counter/><br/>
      {element}{element}{element} <br></br>
      <Greeting/><Greeting/>
      <GreetingProp name="Tom"/><GreetingProp name = "Alice"/><br/>
      <GreetingProps name="Tom" age={15} /><br/>
      <NumberList numbers={numbers} />

      <div style = {divStyle}>Styled element</div>



    </div>
  );
}

export default App;
