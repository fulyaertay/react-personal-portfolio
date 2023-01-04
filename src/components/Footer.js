import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={"https://www.instagram.com/fulya.ertay/"}>
          <InstagramIcon></InstagramIcon>
        </a>
        <a href={"https://twitter.com/Fulinin_"}>
          <TwitterIcon></TwitterIcon>
        </a>
        <a href={"https://www.linkedin.com/in/fulya-ertay-40a593156/"}>
          <LinkedInIcon></LinkedInIcon>
        </a>
      </div>
      <p>&copy; 2023 Fulya Ertay</p>
    </div>
  );
}

export default Footer;
