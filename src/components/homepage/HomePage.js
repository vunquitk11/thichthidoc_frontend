import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

//import components 
import CommonSlick from '../common/CommonSlick';

const SlideZone = styled.div`
    padding: 5rem 8rem;
`;

const HomePage = () => {
    return (
        <div className="main-container main_page_layout">
           <SlideZone>
            <CommonSlick/>
           </SlideZone>
        </div>
    );
}

export default HomePage;
