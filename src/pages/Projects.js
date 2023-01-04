import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import {Link} from 'react-router-dom'
function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project)=>{
          return  <ProjectItem name={project.name} image={project.image} projectLink={project.projectLink}></ProjectItem>
        })}
      </div>
    </div>
  )
}

export default Projects