import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/App.scss';
import Home from './components/home/home'
import LoginComponent from './components/login/login';
import SignUp from './components/sign-up/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/login' element={<LoginComponent></LoginComponent>}/>
          <Route path='/sign-up' element={<SignUp></SignUp>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
