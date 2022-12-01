import LogIn from './LoginPage/LoginPage';
import SignUp from './SignUpPage/SignUp';
import SharedLayout from './SharedLayout/SharedLayout'
import { Routes,Route  }  from 'react-router-dom';
import Home from './HomePage/Home';
import Movie from './HomePage/Movies';
import Series from './HomePage/Series';
import Exclusives from './HomePage/Watchlist';
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

                    <Route path='Movies'  element={<Movie/>}/>
                    <Route path = "Movies/:id" element= {<MovieDescriptionPage/>}/>
                    
                    <Route path='Web-series'  element={<Series/>}/>
                    <Route path = "Web-series/:id/:season/:ep" element= {<SeriesDescriptionPage/>}/>
                    
                    {/* <Route path='Watchlist' element={<Watchlist/>}/> */}
                </Route>
        </Routes>
    </div>
  );
}

export default App;
