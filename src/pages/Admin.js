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
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";


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
        <InsideMainConatiner>
          <MenuImages src={img1}  /> 
          <MenuImages src={img2}  /> 
        </InsideMainConatiner>
      </Wrapper>
    </Container>
  );
};

export default Admin;
