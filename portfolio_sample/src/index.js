import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from './components/layout';

function App(){
  return(<>
    <Layout />
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);