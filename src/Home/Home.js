import React from 'react'
import { Image } from 'react-bootstrap';
import '../Home/Home.css'

export default function Home() {
  return (
    <div className="Home_Main">
      <div className="Home_div  ">
        <span className="Home_span">
          <h2 className="home_play">PLAY</h2>
          <h2 className="Home_span_h2">SCHOOL</h2>
        </span>
        <div className="home_cloud">
          <Image src={require("../assets/Images/cloud2.png")} fluid />
          
        </div>
      </div>
    </div>
  );
}
