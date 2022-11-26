import LogIn from './LoginPage/LoginPage';
import SignUp from './SignUpPage/SignUp';
import SharedLayout from './SharedLayout/SharedLayout'
import { Routes,Route  }  from 'react-router-dom';
import Home from './HomePage/Home';

function App() {
  return (
    <div className="App">
        <Routes>
                <Route path='/'  element={<LogIn/>}/>
                <Route path='Signup'  element={<SignUp/>}/>
                <Route path='/App' element={<SharedLayout/>} >
                    <Route index element={<Home></Home>}/>
                    {/* <Route path='/Movies'  element={<Movie/>}/>
                    <Route path='/Web-series'  element={<Series/>}/>
                    <Route path='/Exclusives' element={<Exclusives/>}/> */}
                </Route>
        </Routes>
    </div>
  );
}

export default App;
