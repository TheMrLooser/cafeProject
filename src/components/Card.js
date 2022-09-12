import React from "react";
import {
  Container,
  Wrapper,
  ImagesContainer,
  DetailContainer,
  Heading,
  Rating,
  Distance,
  More,
} from "../styledComponents/Card";
import { Images } from "../styledComponents/Card";
import hacker from "../img/hacker.jpg";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import ShareLocationSharpIcon from "@mui/icons-material/ShareLocationSharp";
import { Link } from "react-router-dom";
import "../CSS/index.css";

const Card = () => {
  return (
    <Container>
      <Wrapper>
        <ImagesContainer>
          <Images src={hacker} />
        </ImagesContainer>

        <DetailContainer>
          <Heading>Cafe Name</Heading>
          <Rating> Rating 3.5</Rating>
          <Distance>
            {" "}
            <div style={{ alignItems: "center", display: "flex" }}>
              <ShareLocationSharpIcon sx={{ fontSize: "17px" }} /> 5km
            </div>{" "}
            <Link to={"/cafedetails"} className="Link">
              <More>
                more <DoubleArrowRoundedIcon />{" "}
              </More>
            </Link>{" "}
          </Distance>
        </DetailContainer>
      </Wrapper>
    </Container>
  );
};

export default Card;
