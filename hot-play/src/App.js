import LogIn from './LoginPage/LoginPage';
import SignUp from './SignUpPage/SignUp';
import SharedLayout from './SharedLayout/SharedLayout'
import { Routes,Route  }  from 'react-router-dom';
import Home from './HomePage/Home';
import Movie from './HomePage/Movies';
import Series from './HomePage/Series';
import Exclusives from './HomePage/Exclusives';
import MovieDescriptionPage from "./VideoDescriptionPage/MovieDescriptionPage"
import SeriesDescriptionPage from './VideoDescriptionPage/SeriesDescriptionPage'

function App() {
  return (
    <div className="App">
        <Routes>
                <Route path='/'  element={<LogIn/>}/>
                <Route path='Signup'  element={<SignUp/>}/>
                <Route path='/App' element={<SharedLayout/>} >
                    <Route index element={<Home></Home>}/>
                    <Route exact path='Movies'  element={<Movie/>}>
                      <Route path = ":id" element= {<MovieDescriptionPage/>}/>
                    </Route>
                    <Route path='Web-series'  element={<Series/>}>
                      <Route path = ":id" element= {<SeriesDescriptionPage/>}/>
                    </Route>
                    <Route path='Exclusives' element={<Exclusives/>}/>
                </Route>
        </Routes>
    </div>
  );
}

export default App;
