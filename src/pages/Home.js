import React from 'react';
import { Navigator } from '../components/Navigator';
import { Container, Wrapper } from '../styledComponents/Home';


export const Home = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Navigator/>
            </Wrapper>
        </Container>
    </>
  )
}
