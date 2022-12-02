import { BiSearch,BiUserCircle } from "react-icons/bi";


export default function TitleBar (props)
{
    return (
        <div className='title-navbar'>
            <h1 className='h1'>PLAY4H</h1>
            <div className="search-div">
                <div className="searchbutton">
                <div className="input-div">
                <input type="text" className="search"/></div>
                <div><button className="search-button"><BiSearch/></button></div>
                <div className="user-profile"><BiUserCircle/></div></div>
                
            </div>

        </div>
    )
}