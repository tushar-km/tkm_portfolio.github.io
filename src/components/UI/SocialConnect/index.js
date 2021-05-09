import React from "react";
import socialIcons from "../../../assets/social-icons"; 
import "./style.css";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-20">Follow me on: </span>
      <a className="socialLink" href="https://www.facebook.com/tusharkmishra.13">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="https://www.instagram.com/tusharkm_">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="https://www.youtube.com/channel/UCOHykQcleXJlvhR9oYbIE3A">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/tushar-mishra-8865251b7/">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
