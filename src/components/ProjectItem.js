import React from 'react'
import {Link} from 'react-router-dom'
function ProjectItem({image,name,projectLink}) {
  return (
    <div className='projectItem'>
        <div className='picture'>
            <img src={image}>
            </img>
        </div>
        <h5>{name}</h5>
       
    </div>
  )
}

export default ProjectItem