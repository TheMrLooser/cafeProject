import React from 'react';
import { Navigator } from '../components/Navigator';
import Slider from '../components/Slider/Slider';
import { Container, Wrapper,CardContainer } from '../styledComponents/Home';
import Card from '../components/Card';

export const Home = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Slider/>
                <Navigator/>
                <CardContainer>
                  <Card/>
                </CardContainer>

            </Wrapper>
        </Container>
    </>
  )
}
