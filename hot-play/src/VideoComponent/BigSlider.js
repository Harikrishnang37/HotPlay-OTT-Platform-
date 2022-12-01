import { Link } from 'react-router-dom';
import './video.css'
import { useEffect,useState } from 'react';
import {TfiAngleLeft,TfiAngleRight} from 'react-icons/tfi';



export default function BigSlider(props)
{   const[index,setIndex]=useState(0)
    const[hello,setHello]=useState([])
    //console.log(props.data)

    useEffect(()=>{
        fetch(props.from === "Home"?`http://localhost:8000/home/${props.type}`:`http://localhost:8000/data/${props.from}/featured`,{
                method:'GET',
                headers:{'Content-Type':'application/json'},
            }).then((res)=>res.json())
            .then((data)=>{setHello(data)
            //console.log(data)
            })
            
            
    },[])

    function increment()
    {   
        setIndex(index=>(index+1)%hello.length)
    }

    function decrement()
    {   if(index===0)
        setIndex(hello.length-1)
        else
        setIndex(index=>index-1)
    }

    if(hello.length === 0)
    {
        return(<div></div>)
    }
    return(
        <div className="Big-parent" style={{display:'flex',justifyContent:"center"}}>
            <button onClick={decrement}><TfiAngleLeft/></button>
            <div className='forBigLink'>
                <Link to = {hello[index].type==="movie"?`/App/Movies/${hello[index].id}`:`/App/Web-series/${hello[index].id}/${hello[index].season}/${hello[index].episode}`}>
                    <img className='bs_image' src={`http://localhost:8000/image/${hello[index].type}s/${hello[index].id}`} width='800px' style={{padding:'10px'}}/> 
                </Link>
            </div>
            {/* <img className='bs_image' src={`http://localhost:6900/${hello[index].id}`} width='800px' style={{padding:'10px'}}   alt="" /> */}
           <button onClick={increment} style={{opacity:'0,5',color:'violet'}}><TfiAngleRight/></button>
        </div>
    )
}