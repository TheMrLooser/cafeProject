import React from 'react'
import {  BannarComponentContainer, BannarDetailContainer, BannarHeading, BannarSearchComponent, BannarSearchComponentContainer, BannarSetLocationComponent, BannarSetLocationComponentContainer, BannarSubHeading, BannarTextContainer, Container, SearchByCities, SearchByCitiesContainer, Wrapper } from '../styledComponents/Navigator'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navigator = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <BannarDetailContainer>
                    <BannarTextContainer>
                        <BannarHeading>Want Quick, Get Quick</BannarHeading>
                        <BannarSubHeading>Find best cafe according to place, here.</BannarSubHeading>
                    </BannarTextContainer>
                    <BannarComponentContainer>
                        <BannarSetLocationComponentContainer>
                            <BannarSetLocationComponent>Delhi <ArrowDropDownIcon sx={{fontSize:'35px'}}/></BannarSetLocationComponent>
                        </BannarSetLocationComponentContainer>
                        <BannarSearchComponentContainer>
                            <BannarSearchComponent placeholder='Search..'/>
                        </BannarSearchComponentContainer>
                    </BannarComponentContainer>
                    <SearchByCitiesContainer>
                        <SearchByCities></SearchByCities>
                        <SearchByCities>Delhi</SearchByCities>
                        <SearchByCities>Noida</SearchByCities>
                        <SearchByCities>G.N</SearchByCities>
                        <SearchByCities>GZBD</SearchByCities>
                    </SearchByCitiesContainer>
                </BannarDetailContainer> 
         </Wrapper>
        </Container>
    </>
  )
}
