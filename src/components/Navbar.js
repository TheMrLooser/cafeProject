import React from 'react'
import { AccountLogo, AccountWrapper, Container, Elements, ElementWrapper, Logo, LogoContainer, Search, SearchWrapper, Wrapper } from '../styledComponents/NavBar'

export const NavBar = () => {
  return (
     <>
        <Container>
            <Wrapper>
                <LogoContainer>
                    <Logo>Logo</Logo>
                </LogoContainer>
                <SearchWrapper>
                    <Search placeholder='Search..'/>
                </SearchWrapper>
                <ElementWrapper>
                    <Elements>Login/SignUp</Elements>
                </ElementWrapper>
                {/* <AccountWrapper>
                    <AccountLogo/>
                </AccountWrapper> */}
            </Wrapper>
        </Container>
     </>
  )
}
