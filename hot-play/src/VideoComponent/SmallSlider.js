import './video.css'
import { useEffect,useState } from 'react'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import {Link} from "react-router-dom"



export default function SmallSlider(props)
{   const[index,setIndex]=useState(0)
    const [hello, setHello] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:6900",{
                method:'GET',
                headers:{'Content-Type':'application/json'},
            }).then((res)=>res.json())
            .then((data)=>setHello(data))
            
    },[])

    var array = hello.slice(index)
    function increment()
    {   
        if(index===hello.length-6)
            {setIndex(0)
                array = hello
            }
        else
            {setIndex(index=>index+1)
                array = hello.slice(index+1,index+8)
                //console.log(array)
            }

    }
    //console.log(array)

    function decrement()
    {   
        if(index===0)
        return;
        else 
        setIndex(index=>index-1)
    }

    return(
        <div className="small-parent" style={{display:'flex',overflow:'hidden'}}>
            <button onClick={decrement} ><AiOutlineLeft/></button>
            <div style={{display:'flex',overflow:'hidden'}}>
                {[array.map((image,index)=><Link to = {`/App/${image.type}/${image.id}`} key = {index}><img className='ss_image' src={`http://localhost:6900/${image.id}`} width='200px' style={{padding:'5px'}}/> </Link>)]}
            </div>
           <button onClick={increment}  ><AiOutlineRight></AiOutlineRight></button>
        </div>
    )
}