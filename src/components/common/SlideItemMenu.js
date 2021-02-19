import React from 'react';
import styled from 'styled-components';


//button learn more
const LearMoreButtonStyle = styled.button`
  background-color: #2f4f4f;
  border-style: none;
  border-radius: 4px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: white;
  font-weight: 900;
  opacity: 0.8;
  margin-left: 5px;
`;

const LearMoreButton = () => {
  return (
    <LearMoreButtonStyle className="default__button">Learn more</LearMoreButtonStyle>
  )
}

//end button learn more

const DivSlideItemMenu = styled.div`
  position: absolute;
  z-index: 100;
  top: 5px;
  left: 5px;
  height: 90px;
  width: 600px;
  background-color: rgba(0,0,0,0.3);
`;

const ImageName = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
  margin: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SlideItemMenu = () => {
  return (
    <DivSlideItemMenu>
      <ImageName>Image name</ImageName>
    </DivSlideItemMenu>
  )
}

export default SlideItemMenu