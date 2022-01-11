import React from "react";
import "./Foot.css";

function Foot() {
  return (
    <div className="foot">
      <div className="foot__left">
        <p> © 2022 Airbnb, Inc. Demo. Privacy·Terms·Sitemap</p>
      </div>

      <div className="foot__right">
        <div className="foot__rightone">
          <p> © 2022 Airbnb, Inc. Demo. Privacy·Terms·Sitemap</p>
        </div>
        <div className="foot__rightone">
          <p> © 2022 Airbnb, Inc. Demo. Privacy·Terms·Sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
