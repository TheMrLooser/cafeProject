import React from "react";
import {
  Container,
  CursorImage,
  ImageContainer,
  Selected,
  Wrapper,
} from "../styledComponents/Gallery";
import img1 from "../MenuImages/img1.jpg";
import { useState } from "react";

const Gallery = () => {
  return (
    <Container>
      <Wrapper>
        <Selected>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </Selected>

        <ImageContainer>
          <CursorImage>
            <img src={img1} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
            <img src={img1} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
            <img src={img1} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
            <img src={img1} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
          <img src={img1} style={{ width: "100%", height: "100%" }} />
        </CursorImage>
        <CursorImage>
        <img src={img1} style={{ width: "100%", height: "100%" }} />
      </CursorImage>
      <CursorImage>
      <img src={img1} style={{ width: "100%", height: "100%" }} />
    </CursorImage>
    <CursorImage>
    <img src={img1} style={{ width: "100%", height: "100%" }} />
  </CursorImage>
  <CursorImage>
  <img src={img1} style={{ width: "100%", height: "100%" }} />
</CursorImage>
<CursorImage>
<img src={img1} style={{ width: "100%", height: "100%" }} />
</CursorImage>
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
