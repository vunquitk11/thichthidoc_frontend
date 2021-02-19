import React, { useRef } from 'react';
import Slider from 'infinite-react-carousel';
import styled from 'styled-components';

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
      height: "100%",
    }

    return (
      <button type="button" 
      style={prevButtonStyle}
      onClick={() => goToPrev()}> Previous</button>
    );
  }

  const NextArrow = () => {
    const nextButtonStyle = {
      position: "absolute",
      width: "100px",
      right: "-100px",
      height: "100%",
    }

    return (
      <button type="button"
      style={nextButtonStyle}
      onClick={() => goToNext()}> Next</button>
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

  return (
    <SlideZone>
      <NextArrow/>
      <PrevArrow/>
      <Slider {...settings} ref={slider}>
        <div>
          <img style={{width:"100%",}} src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
        </div>
        <div>
          <img style={{width:"100%",}} src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
        </div>
        <div>
          <img style={{width:"100%",}} src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
        </div>
        <div>
          <img style={{width:"100%",}} src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
        </div>
        <div>
          <img style={{width:"100%",}} src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
        </div>
      </Slider>
    </SlideZone>
  )
};

export default SimpleSlider;