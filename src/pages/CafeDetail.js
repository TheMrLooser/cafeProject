import React from "react";
import Slider from "../components/Slider/Slider";
import {
  Container,
  Wrapper,
  Heading,
  Description,
  NavContainer,
  NavElements,
} from "../styledComponents/CafeDetail";

const CafeDetail = () => {
  return (
    <Container>
      <Slider></Slider>
      <Wrapper>
        <Heading>Chai Sutta</Heading>
        <Description>
         <NavContainer>
         <NavElements>About</NavElements>
         <NavElements>Menu</NavElements>
         </NavContainer>
        </Description>
      </Wrapper>
    </Container>
  );
};

export default CafeDetail;
