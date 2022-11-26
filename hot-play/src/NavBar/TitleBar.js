import { BiSearch,BiUserCircle } from "react-icons/bi";

export default function TitleBar (props)
{
    return (
        <div className='title-navbar'>
            <h1>HOTPLAY</h1>
            <div className="search-div">
                <input type="text" className="search" />
                <button className="search-button"><BiSearch></BiSearch></button>
            </div>
            <div className="user-profile">
                <BiUserCircle/>
            </div>
        </div>
    )
}