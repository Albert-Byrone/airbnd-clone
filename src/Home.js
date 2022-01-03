import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Cards from "./Cards";
import Question from "./Question";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__container">
        <h1> Inspiration for your next trip</h1>
        <div className="home__section">
          {" "}
          <Card
            src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=720"
            city="Nairobi"
            distance="441 Kilometres away"
            color="#DE3151"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/ffde0c4b-1889-4d11-bb00-41411d34fdfc.jpg?im_w=720"
            city="Malindi"
            distance="400 Kilometres away"
            color="#BC1A6E"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=720"
            city="Malindi"
            distance="400 Kilometres away"
            color="#D93B30"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=720"
            city="Nakuru"
            distance="200 Kilometres away"
            color="#CC2D4A"
          />
        </div>
        <div className="home__section">
          <Cards />
        </div>
        <div className="home__section">
          <Question />
        </div>
      </div>
    </div>
  );
}

export default Home;
