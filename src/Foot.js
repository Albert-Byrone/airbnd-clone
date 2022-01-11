import React from "react";
import "./Foot.css";
import LanguageIcon from "@mui/icons-material/Language";

function Foot() {
  return (
    <div className="foot">
      <div className="foot__left">
        <p> © 2022 Airbnb, Inc. Demo. Privacy·Terms·Sitemap</p>
      </div>

      <div className="foot__right">
        <div className="foot__rightone">
          <LanguageIcon fontSize="mediam" />
          <>Language</>
        </div>
        <div className="foot__rightone">
          {/* <p> © 2022 Airbnb, Inc. Demo. Privacy·Terms·Sitemap</p> */}
        </div>
      </div>
    </div>
  );
}

export default Foot;