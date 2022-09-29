import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  Container,
  Heading,
  InsideMainConatiner,
  MenuImages,
} from "../styledComponents/Admin";
import Slider from "../components/Slider/Slider";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";

import img1 from "../MenuImages/img1.jpg";
import img2 from "../MenuImages/img2.jpg";
import Gallery from "../components/Gallery";

const Admin = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          Chai Sutta <AppRegistrationRoundedIcon />{" "}
        </Heading>
        <InsideMainConatiner>
          <Slider></Slider>
          <AppRegistrationRoundedIcon
            sx={{ position: "absolute", right: "0px", fontSize: "30px" }}
          />
        </InsideMainConatiner>
        <Heading>
          menu Images <AppRegistrationRoundedIcon />{" "}
        </Heading>
         <Gallery></Gallery>
      </Wrapper>
    </Container>
  );
};

export default Admin;
