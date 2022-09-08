import React from 'react';
import { Navigator } from '../components/Navigator';
import Slider from '../components/Slider/Slider';
import { Container, Wrapper } from '../styledComponents/Home';


export const Home = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Slider/>
                <Navigator/>
            </Wrapper>
        </Container>
    </>
  )
}
