import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BannerCard from "./BannerCard";




const Banners=()=>{
  return(
      <>
      <Carousel variant="dark" interval={2000}>
        <Carousel.Item>
         <BannerCard/>
        </Carousel.Item>

        <Carousel.Item>
        <BannerCard/>
        </Carousel.Item>

        <Carousel.Item>
        <BannerCard/>
        </Carousel.Item>

        
      </Carousel>
      </>
  )
}

export default Banners;
