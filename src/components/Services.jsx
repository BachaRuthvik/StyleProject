import React from 'react'
import {Carousel}from "react-responsive-carousel";
import img1 from "../assets/3.jpg";
 import "react-responsive-carousel/lib/styles/carousel.min.css"
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div >
        <Carousel infiniteLoop autoPlay showStatus={false} 
        showThumbs={false} 
        showArrows={false} interval={2000}> 
        <div>
        <img src={img1} alt="item"/>
        <p className="legend">Full Stack</p>
        </div>
        <div>
        <img src={img2} alt="item"/>
        <p className="legend">peer to peer support</p>
        </div>
</Carousel>






        Services</div>
  )
}

export default Services