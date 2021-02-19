import React, { useRef } from 'react';
import Slider from 'infinite-react-carousel';
import styled from 'styled-components';

import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

//import another components
import SlideItemDetail from './SlideItemDetail';

const SimpleSlider = () => {

  const slider = useRef();

  const goToNext = () => {
      slider.current.slickNext();
  }

  const goToPrev = () => {
      slider.current.slickPrev();
  }

  const PrevArrow = () => {
    const prevButtonStyle = {
      position: "absolute",
      width: "100px",
      left: "-100px",
      height: "600px",
      backgroundColor: "#2F4F4F",
      color: "#ffffff",
      borderStyle: "none",
    }

    return (
      <button type="button" 
      className="default__button"
      style={prevButtonStyle}
      onClick={() => goToPrev()}>
        <MDBIcon style={{fontSize:"60px",}}
        icon="chevron-circle-left" />
        </button>
    );
  }

  const NextArrow = () => {
    const nextButtonStyle = {
      position: "absolute",
      width: "100px",
      right: "-100px",
      height: "600px",
      backgroundColor: "#2F4F4F",
      color: "#ffffff",
      borderStyle: "none",
    }

    return (
      <button type="button"
      className="default__button"
      style={nextButtonStyle}
      onClick={() => goToNext()}>
        <MDBIcon style={{fontSize:"60px",}} 
        icon="chevron-circle-right" />
        </button>
    );
  }

  const SlideZone = styled.div`
    position: relative;
  `;

  const settings =  {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
  };

  const ImageSlideItem = styled.img`
    width: 100%;
    height: 600px;
  `;

  const DivLearnMore = styled.div`
  
  `;

  return (
    <SlideZone>
      <NextArrow/>
      <PrevArrow/>
      <Slider {...settings} ref={slider}>
        <div style={{position:"relative",}}>
          <ImageSlideItem src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
          <SlideItemDetail/>
        </div>
        <div style={{position:"relative",}}>
          <ImageSlideItem src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
          <SlideItemDetail/>
        </div>
        <div style={{position:"relative",}}>
          <ImageSlideItem src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
          <SlideItemDetail/>
        </div>
        <div style={{position:"relative",}}>
          <ImageSlideItem src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
          <SlideItemDetail/>
        </div>
        <div style={{position:"relative",}}>
          <ImageSlideItem src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
          <SlideItemDetail/>
        </div>
      </Slider>
    </SlideZone>
  )
};

export default SimpleSlider;