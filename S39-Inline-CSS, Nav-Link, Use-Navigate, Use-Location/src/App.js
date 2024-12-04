import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    // <div className="App">
    //   <LoginPage></LoginPage>
    //   <SignUp></SignUp>
    //   <WelcomePage></WelcomePage>
    
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      <Route path="/HomePage" element={<HomePage></HomePage>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
