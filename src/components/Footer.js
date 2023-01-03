import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon></InstagramIcon>
            <TwitterIcon></TwitterIcon>
            <LinkedInIcon></LinkedInIcon>
        </div>
        <p>&copy; 2023 Fulya Ertay</p>

    </div>
  )
}

export default Footer