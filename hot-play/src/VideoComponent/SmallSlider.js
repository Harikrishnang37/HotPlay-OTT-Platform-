import './video.css'
import { useEffect,useState } from 'react'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import {Link} from "react-router-dom"



export default function SmallSlider(props)
{   const[index,setIndex]=useState(0)
    const [hello, setHello] = useState([])
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    useEffect(()=>{
        fetch(props.from === "Home"?`http://localhost:8000/home/${props.type}`:`http://localhost:8000/data/${props.from}/${props.type}`,{
                method:'GET',
                headers:{'Content-Type':'application/json'},
            }).then((res)=>res.json())
            .then((data)=>{
                shuffleArray(data)
                setHello(data)})
            
    },[])

    var array = hello.slice(index)
    //console.log(array)
    function increment()
    {   
        if(index===hello.length-6)
            {setIndex(0)
                array = hello
            }
        else
            {setIndex(index=>index+1)
                array = hello.slice(index+1)
                //console.log(array)
            }
            //console.log()

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
                {[array.map((element,index)=><div key = {index} className='image'><Link to = {element.type==="movie"?`/App/Movies/${element.id}`:`/App/Web-series/${element.id}/${element.season}/${element.episode}`} ><img className='ss_image' src={`http://localhost:8000/image/${element.type}s/${element.id}`} width='200px' height='113px' style={{padding:'5px'}}/> </Link></div>
                )]}
            </div>
           <button onClick={increment}  ><AiOutlineRight></AiOutlineRight></button>
        </div>
    )
}