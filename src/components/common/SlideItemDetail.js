import React from 'react';
import styled from 'styled-components';

import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

const DivCoverIcon = styled.div`
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #ffffff;
`;

const DivSlideItemDetail = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 9px;
  left: 5px;
  height: 50px;
  width: 220px;
  background-color: rgba(0,0,0,0);
  justify-content: space-between;
  display: flex;
`;

const SlideItemDetail = () => {
  return (
    <DivSlideItemDetail>
      <DivCoverIcon className="default__button" style={{backgroundColor:"#1E90FF",}} title="More information">
        <MDBIcon icon="info-circle" />
      </DivCoverIcon>
      <DivCoverIcon className="default__button" style={{backgroundColor:"#DC143C",}} title="Save for watch later">
        <MDBIcon icon="heart" />
      </DivCoverIcon>
      <DivCoverIcon className="default__button" style={{backgroundColor:"#FFD700",}} title="Report this picture">
        <MDBIcon icon="flag" />
      </DivCoverIcon>
      <DivCoverIcon className="default__button" style={{backgroundColor:"#3CB371",}} title="Download this picture">
        <MDBIcon icon="cloud-download-alt" />
      </DivCoverIcon>
    </DivSlideItemDetail>
  )
}

export default SlideItemDetail