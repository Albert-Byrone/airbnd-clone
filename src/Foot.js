import React from "react";
import "./Foot.css";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Foot() {
  return (
    <div className="foot">
      <div className="foot__left">
        <p> © 2022 Airbnb clone, Inc. Demo. Privacy·Terms·Sitemap</p>
      </div>

      <div className="foot__right">
        <div className="foot__rightone">
          <LanguageIcon fontSize="mediam" />
          <span>Language</span>
        </div>
        <div className="foot__righttwo">
          <ul>
            <li>
              <FacebookIcon fontSize="small" />
            </li>
            <li>
              <InstagramIcon fontSize="small" />
            </li>
            <li>
              <TwitterIcon fontSize="small" />
            </li>
          </ul>
          {/* <p> © 2022 Airbnb, Inc. Demo. Privacy·Terms·Sitemap</p> */}
        </div>
      </div>
    </div>
  );
}

export default Foot;
