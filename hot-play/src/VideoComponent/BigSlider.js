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
import { useEffect,useState } from 'react';
import {TfiAngleLeft,TfiAngleRight} from 'react-icons/tfi';



export default function BigSlider(props)
{   const[index,setIndex]=useState(0)
    const hello = [
       image1,image2,image3,image4,image5,image6,image7,image8,image9
    ]

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

    return(
        <div className="Big-parent" style={{display:'flex',justifyContent:"center"}}>
            <button className='decrement' onClick={decrement}><TfiAngleLeft/></button>
            
            <img className='bs_image' src={hello[index]} width='800px' style={{padding:'10px'}}   alt="" />
           <button className='increment' onClick={increment} style={{opacity:'0,5',color:'violet'}}><TfiAngleRight/></button>
        </div>
    )
}