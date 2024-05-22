import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const onclick = () =>{
    if (input === "") {
      // alert("Field is manditory")
      toast.success("Field is manditory")
    }
    else {
      navigate(`/room/${input}`);
      toast.success("Generating a Call!")
    }
  }
  return (
    <div >
      <div className='main'>
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} className="input" type='text' placeholder='Your Call Name'/>
        <button onClick={onclick} className='btn'>Join</button>
      </div>
    </div>
  )
}
