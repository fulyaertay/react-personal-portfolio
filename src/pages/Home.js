import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi! My Name is Fulya!</h2>
        <div className='intro'>
          <p>A junior software developer with a passion  for learning and creating!</p>
          <a href={"https://github.com/fulyaertay"}><GitHubIcon></GitHubIcon></a>
          <a href={"https://www.linkedin.com/in/fulya-ertay-40a593156/"}><LinkedInIcon></LinkedInIcon></a>

        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, JavaScript, HTML, CSS, Materialize CSS, Bootstrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Python, Django</span>
          </li>
          <li className='item'>
            <h2>Version Control</h2>
            <span>Git, Github</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home