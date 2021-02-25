import React from 'react';

import styled from 'styled-components';

const PostPage = () => {

  const DivCover = styled.div`
    display: flex;
    padding-top: 5rem;
  `;

  const DivCoverImage = styled.div`
    width: 50%;
    background-color: red;
    margin-right: 5px;
  `;

  const DivCoverDetail = styled.div`
    width: 50%;
    background: yellow;
    margin-left: 5p;
  `;

  const Image = styled.img`
    width: 100%;
  `;

  const Content = styled.div`
  `;

  return (
    <div className="main-container main_page_layout">
        <DivCover>
          <DivCoverImage>
            <Image src="https://velocityglobal.com/wp-content/uploads/2019/03/Blog-Images-What-Does-the-Vietnam-Startup-Scene-Look-like-in-2019.jpg" />
          </DivCoverImage>
          <DivCoverDetail>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
          </DivCoverDetail>
        </DivCover>
    </div>
  )
}

export default PostPage;