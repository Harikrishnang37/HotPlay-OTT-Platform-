import {Link} from 'react-router-dom'

export default function Navigate(props){
    return(
        <div className="navigate">
            <Link to='/App'>Home</Link>
            <Link to='Movies' >Movies</Link>
            <Link to='Web-series'>Series</Link>
            <Link to='Exclusives'>Exclusives</Link>
        </div>
    )
}