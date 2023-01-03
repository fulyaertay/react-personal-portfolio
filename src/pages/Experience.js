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
              <BusinessCenterIcon> </BusinessCenterIcon>
              <h3>QA Tester (December 2021 - July 2022)</h3>
              <span> Univenn</span>
          
          </li>
          <li>
              <BusinessCenterIcon> </BusinessCenterIcon>
              <h3>Software Developer Intern(July 2019 - August 2019)</h3>
              <span> 9 Eylül University Rectorship </span>
    
          </li>
          <li>
              <BusinessCenterIcon> </BusinessCenterIcon>
              <h3>Computer Programmer Intern(June 2015 - August 2015)</h3>
              <span> 9 Eylül University Rectorship </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience