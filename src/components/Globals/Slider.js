import React, { Component } from "react";
import Slider from "react-slick";
import"../../components/slick.scss"
import "../../components/node.scss"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div  >

        <Slider {...settings}>
        
            
                    
                        <div className ="hw hh d-flex justify-content-center align-items-center">
                            <h3><img className="PresidentLaunchingWeb-image aos-init aos-animate" src={require("../../images/Launching-site-image1.2f88fa1a.jpg")} /></h3>
                        </div>
                        <div className ="hw hh d-flex justify-content-center align-items-center">
                            <h3><img className="PresidentLaunchingWeb-image aos-init aos-animate" src={require("../../images/Launching-site-image3.d4d5dfcb.jpg")} /></h3>
                        </div >
                        <div className ="hw hh d-flex justify-content-center align-items-center">
                            <h3><img className="PresidentLaunchingWeb-image aos-init aos-animate" src={require("../../images/Launching-site-image2.c147d1bb.jpg")} /></h3>
                        </div>
                    
                    
           
  
        </Slider>
      </div>
    );
  }
}