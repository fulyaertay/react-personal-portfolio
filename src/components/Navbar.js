import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
  const [expandNavbar, setExpandNavbar]=useState("false");
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
        <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}> <ReorderIcon/></button>
        
        </div>
        <div className='links'>
            <Link to="/">Home </Link>
            <Link to="/projects">Projects </Link>
            <Link to="/experience">Experience </Link>
        </div>
    
    
    </div>
  )
}

export default Navbar