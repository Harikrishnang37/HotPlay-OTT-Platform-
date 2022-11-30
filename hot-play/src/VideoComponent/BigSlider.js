import image1 from'./demo_images/download.jpeg'
import image2 from'./demo_images/download1.jpeg'
import image3 from'./demo_images/download6.jpeg'
import image4 from'./demo_images/download3.jpeg'
import image5 from'./demo_images/download4.jpeg'
import image6 from'./demo_images/download5.jpeg'
import image7 from'./demo_images/download16.jpeg'
import image8 from'./demo_images/download17.png'
import image9 from'./demo_images/download18.png'
import './video.css'
import { useEffect,useState } from 'react'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'



export default function BigSlider(props)
{   const[index,setIndex]=useState(0)
    const[hello,setHello]=useState([])
    //console.log(props.data)

    useEffect(()=>{
        fetch("http://localhost:6900",{
                method:'GET',
                headers:{'Content-Type':'application/json'},
            }).then((res)=>res.json())
            .then((data)=>setHello(data))
            
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
            <button onClick={decrement}><AiOutlineLeft/></button>
            <img className='bs_image' src={`http://localhost:6900/${hello[index].id}`} width='800px' style={{padding:'10px'}}   alt="" />
           <button onClick={increment} style={{opacity:'0,5',color:'violet'}}><AiOutlineRight/></button>
        </div>
    )
}