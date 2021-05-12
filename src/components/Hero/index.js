import React from "react";
import me from "../../assets/images/me-right.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Tushar Kanti Mishra
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
          <p className="font-12 grey mtb-10">MernStack Developer</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me" />
            </div>
            <div id ="downcv">
              <a href="https://drive.google.com/file/d/1bsCpmADYQhOlbR0emClzEFDyHYq2T1Ww/view?usp=sharing"target="_blank" >
              Download CV
              </a>
              
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
