import React from "react";
import {
  Container,
  CursorImage,
  ImageContainer,
  Selected,
  Wrapper,
} from "../styledComponents/Gallery";
import img1 from "../MenuImages/img1.jpg";
import img2 from "../MenuImages/img2.jpg";
import img3 from "../MenuImages/img3.jpg";
import img4 from "../MenuImages/img4.jpg";
import img5 from "../MenuImages/img5.jpg";
import { useState } from "react";

const Gallery = () => {
const [selectedImage, setSelectedImage] = useState(img1);

  return (
    <Container>
      <Wrapper>
        <Selected>
          <img src={selectedImage} style={{ width: "100%", height: "100%" }} />
        </Selected>

        <ImageContainer>
          <CursorImage>
            <img src={img2} onClick={() => setSelectedImage(img2)} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
            <img src={img3}  onClick={() => setSelectedImage(img3)} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
            <img src={img4} onClick={() => setSelectedImage(img4)} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
            <img src={img5} onClick={() => setSelectedImage(img5)} style={{ width: "100%", height: "100%" }} />
          </CursorImage>
          <CursorImage>
          <img src={img1}   style={{ width: "100%", height: "100%" }} />
        </CursorImage>
        <CursorImage>
        <img src={img2}   style={{ width: "100%", height: "100%" }} />
      </CursorImage>
      <CursorImage>
      <img src={img3}   style={{ width: "100%", height: "100%" }} />
    </CursorImage>
    <CursorImage>
    <img src={img4}   style={{ width: "100%", height: "100%" }} />
  </CursorImage>
  <CursorImage>
  <img src={img5} style={{ width: "100%", height: "100%" }} />
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
