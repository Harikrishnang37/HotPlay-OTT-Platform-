import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navigate(props){
    return(
        <div className="navigate">
           <div className='navigate-2'><Link to='/App'><button className='nav-button'>Home</button></Link></div>
           <div className='navigate-2'><Link to='Movies' ><button className='nav-button'>Movies</button></Link></div>     
           <div className='navigate-2'><Link to='Web-series'><button className='nav-button'>Series</button></Link></div>       
           <div className='navigate-2'><Link to='Exclusives'><button className='nav-button'>Exclusives</button></Link></div>
        </div>
    )
}