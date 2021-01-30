import React from 'react';
import styled from 'styled-components';

//import media

import logo from '../../images/logo/logo.png';

const Header = () => {
  
  //style area
  const Image = styled.img`
    width: 60px;
    height: 60px;
  `;

  const Div1 = styled.div`
    border-bottom: 2px solid #808080;
    display: flex;
    width: 100%;
  `;

  const Button = styled.button`
  `;
  //end style area

  return(
    <React.Fragment>
      <Div1>
        <div>
          <Image src={logo}/>
        </div>
        <div></div>
        <div></div>
      </Div1>
    </React.Fragment>
  );
}
export default Header;