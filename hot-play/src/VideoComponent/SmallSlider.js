import image1 from'./demo_images/download.jpeg'
import image2 from'./demo_images/download1.jpeg'
import image3 from'./demo_images/download6.jpeg'
import image4 from'./demo_images/download3.jpeg'
import image5 from'./demo_images/download4.jpeg'
import image6 from'./demo_images/download5.jpeg'
import image7 from'./demo_images/download7.jpeg'
import image8 from'./demo_images/download8.jpeg'
import image9 from'./demo_images/download9.jpeg'
import image10 from'./demo_images/download10.jpeg'
import image11 from'./demo_images/download11.jpeg'
import image12 from'./demo_images/download12.jpeg'
import image13 from'./demo_images/download13.jpeg'
import image14 from'./demo_images/download14.jpeg'
import image15 from'./demo_images/download15.jpeg'
import image16 from'./demo_images/download2.jpeg'


import './video.css'
import { useEffect,useState } from 'react'
import {AiOutlineRight} from 'react-icons/ai'



export default function BigSlider(props)
{   const[index,setIndex]=useState(0)
    
    const hello = [
       image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16
    ]

    var array = hello.slice(index)
    function increment()
    {   
        if(index===hello.length-5)
            {setIndex(0)
                array = hello
            }
        else
            {setIndex(index=>index+1)
                array = hello.slice(index+1,index+8)
                console.log(array)
            }

    }
    console.log(array)

    function decrement()
    {   
        if(index===0)
        return;
        else 
        setIndex(index=>index-1)
    }

    return(
        <div className="parent" style={{display:'flex',overflow:'hidden'}}>
            <button onClick={decrement} style={{display:'flex',flexDirection:'column'}}>mks</button>
            <div style={{display:'flex',overflow:'hidden',position:'sticky'}}>{[array.map((image,index)=><img src={image} key={index} width='200px' style={{padding:'5px'}}/>)]}</div>
           <button onClick={increment} style={{position:'relative'}} ><AiOutlineRight></AiOutlineRight></button>
        </div>
    )
}