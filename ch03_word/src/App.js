import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import EmptyPage from './components/EmptyPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<DayList/>}/>
        <Route path="/day/:day" element={<Day/>}/>
        <Route path="*" element={<EmptyPage></EmptyPage>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
