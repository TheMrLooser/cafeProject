import React from 'react'
import { Container, Wrapper,ImagesContainer, DetailContainer, Heading, Rating, Distance } from '../styledComponents/Card'
import { Images } from '../styledComponents/Card'
import hacker from '../img/hacker.jpg'


const Card = () => {
  return (
    <Container>
        <Wrapper>
            <ImagesContainer>
              <Images src={hacker}/>
            </ImagesContainer>
            
            <DetailContainer>
              <Heading>Cafe Name</Heading>
              <Rating> Rating 3.5</Rating>
              <Distance>5km</Distance>
            </DetailContainer>
          

        </Wrapper>
    </Container>
  )
}

export default Card
