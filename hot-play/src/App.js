import LogIn from './LoginPage/LoginPage';
import SignUp from './SignUpPage/SignUp';
import { Routes,Route  }  from 'react-router-dom';import Home from './HomePage/Home';

function App() {
  return (
    <div className="App">
        <Routes>
                <Route path='/'  element={<LogIn/>}/>
                <Route path='Signup'  element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;
