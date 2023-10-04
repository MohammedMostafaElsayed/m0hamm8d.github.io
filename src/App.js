
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/header';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      </div>
      <Routers/>
    
    </BrowserRouter>
    
  );
}

export default App;
