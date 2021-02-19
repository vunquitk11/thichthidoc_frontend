import React from 'react';
import styled from 'styled-components';

//import components

//import icon
import logoIcon from '../../images/logo/logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

//import css 
import '../../assets/header.scss';

const Header = () => {
  
  //style area
  const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `;

  const Div1 = styled.div`
    border-bottom: 2px solid #808080;
    background-color: #f53f2d;
    padding: 0 15rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    z-index: 100;
  `;

  const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  `;

  const Span1 = styled.span`
    padding-left: 0.5rem;
    cursor: pointer;
  `;

  const Span2 = styled.span`
    padding-right: 0.5rem;
    cursor: pointer;
  `;

  const SearchZone = styled.div`
    width: 100%;
    height: 44px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
  `;

  const SearchZoneInput = styled.input`
    width: 87%;
    height: 38px;
    border-style: none;
    border-radius: 4px;
    outline: unset;
    font-size: 16px;
    padding: 0 0.5rem;
  `;

  const SearchZoneButton = styled.button`
    background-color: #f53f2d;
    border-style: none;
    border-radius: 4px;
    font-size: 16px;
    color: white;
    height: 38px;
    width: 10%;
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 0.5;
    }
  `;

  const Button = styled.button`
  `;
  //end style area

  const icon = <FontAwesomeIcon icon={faFacebook} />

  return(
    <React.Fragment>
      <Div1>
        <Div2>
          <div style={{display:"flex",}}>
            <div className="header_option">Kênh người tạo nội dung</div>
            <div className="header_option">Tải ứng dụng</div>
            <div className="header_option" style={{borderRight: "none",}}>Kết nối
              <Span1>
                <FontAwesomeIcon icon={faFacebook} />
              </Span1>
              <Span1>
                <FontAwesomeIcon icon={faInstagram} />
              </Span1>
              <Span1>
                <FontAwesomeIcon icon={faTwitter} />
              </Span1>
            </div>
          </div>
          <div style={{display:"flex",}}>
            <div className="header_option">
              <Span2>
                <FontAwesomeIcon icon={faBell} />
              </Span2>
              Thông báo
            </div>
            <div className="header_option" style={{borderRight: "none",}}>
              <Span2>
                <FontAwesomeIcon icon={faQuestion} />
              </Span2>
              Trợ giúp</div>
            <div className="header_option">Đăng kí</div>
            <div className="header_option" style={{borderRight: "none",}}>Đăng nhập</div>
          </div>
        </Div2>
        <div id="header_search_zone">
          <div style={{width:"20%",}}>
            <Image src={logoIcon}/>
          </div>
          <div style={{width:"60%",}}>
            <SearchZone>
              <SearchZoneInput/>
              <SearchZoneButton>
                <FontAwesomeIcon icon={faSearch} />
              </SearchZoneButton>
            </SearchZone>
          </div>
          <div></div>
        </div>
      </Div1>
    </React.Fragment>
  );
}
export default Header;