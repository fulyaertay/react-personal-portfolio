import React from 'react'
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Experience() {
  return (
    <div className='expContainer'>
      <div className='expElements'>
        <h2 className='expTitle'>Experiences</h2>
        <ol>
          <li>
            <SchoolIcon>  </SchoolIcon>
              <h3>Associate Degree of Computer Programming (2016)</h3>
              <span> Yaşar University</span>
          
          </li>
          <li>
            <BusinessCenterIcon> </BusinessCenterIcon>
              <h3>Bachelor's of Science in Computer Engineering(2020)</h3>
              <span> Yaşar University</span>
    
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience