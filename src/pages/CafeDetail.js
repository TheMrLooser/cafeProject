import React, { useState } from "react";
import Slider from "../components/Slider/Slider";
import luffy from "../MenuImages/luffy.jpg";
import {
  Container,
  Wrapper,
  Heading,
  Description,
  NavContainer,
  NavElements,
  About,
  AboutCafe,
  ElementContainer,
  Title,
  Element,
  Menu,
  MenuImage,
} from "../styledComponents/CafeDetail";

const CafeDetail = () => {

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Slider></Slider>
      <Wrapper>
        <Heading>Chai Sutta</Heading>
        <Description>
          <NavContainer>
            <NavElements onClick={() => setOpen(true)} >About</NavElements>
            <NavElements  onClick={() => setOpen(false)} >Menu</NavElements>
          </NavContainer>
          {open ? (
            <>
              <About>
                <ElementContainer>
                  <Title>Servie:</Title>
                  <Element>Dine-in, Takeaway</Element>{" "}
                </ElementContainer>
                <ElementContainer>
                  <Title>Address:</Title>
                  <Element>Dine-in, Takeaway</Element>{" "}
                </ElementContainer>
                <ElementContainer>
                  <Title>Servie:</Title>
                  <Element>Dine-in, Takeaway</Element>{" "}
                </ElementContainer>
                <ElementContainer>
                  <Title>Servie:</Title>
                  <Element>Dine-in, Takeaway</Element>{" "}
                </ElementContainer>
                <ElementContainer>
                  <Title>Servie:</Title>
                  <Element>Dine-in, Takeaway</Element>{" "}
                </ElementContainer>

                <AboutCafe>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi suscipit labore eveniet, pariatur totam, cumque
                    obcaecati a facilis quisquam facere molestias nesciunt,
                    earum eaque officia! Perspiciatis atque repellat a, officia
                    delectus velit sit rerum nihil eius minus hic officiis
                    debitis, natus provident impedit et commodi nostrum
                    repudiandae autem accusamus dolore.
                  </p>
                </AboutCafe>
              </About>
            </>
          ) : null}
          
            {
                !open ? <Menu> <MenuImage src = {luffy} /> </Menu>: null

            }
        </Description>
      </Wrapper>
    </Container>
  );
};

export default CafeDetail;
