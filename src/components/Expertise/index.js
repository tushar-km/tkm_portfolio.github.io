import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import me from "../../assets/images/me-left.png";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";

/**
 * @author
 * @function Expertise
 **/

const percentage = 78;

const Expertise = (props) => {
  return (
    <div className="container" style={{ marginTop: "30px", padding: "30px 0" }}>
      <div data-aos="fade-right" className="rightImgMeContainer">
        <img src={me} alt-="" />
        <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
      </div>
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <Card
        style={{
          padding: "33px",
          width: "320px",
          margin: "100px auto",
          position: "relative",
          left: "286px",
          zIndex: 1,
        }}
        data-aos="flip-up"
      >
        <div className="flexRow align-center">
          <div style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.primaryColor,
                pathColor: colors.primaryColor,
              })}
            />
          </div>
          <h2 className="textColor mlr-10">Development</h2>
        </div>
        <p className="black mtb-12 font-15">
          JavaScript is one of the greatest programming language.
        </p>
      </Card>
    </div>
  );
};

export default Expertise;
