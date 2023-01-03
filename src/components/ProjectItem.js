import React from 'react'

function ProjectItem({image,name}) {
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