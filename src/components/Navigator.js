import React from 'react'
import {  BannarComponentContainer, BannarDetailContainer, BannarHeading, BannarSearchComponent, BannarSearchComponentContainer, BannarSetLocationComponent, BannarSetLocationComponentContainer, BannarSubHeading, BannarTextContainer, Container, SearchByCities, SearchByCitiesContainer, Wrapper } from '../styledComponents/Navigator'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShareLocationSharpIcon from '@mui/icons-material/ShareLocationSharp';

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
                    {/* <BannarComponentContainer>
                        <BannarSetLocationComponentContainer>
                            <BannarSetLocationComponent>Delhi <ArrowDropDownIcon sx={{fontSize:'35px'}}/></BannarSetLocationComponent>
                        </BannarSetLocationComponentContainer>
                        <BannarSearchComponentContainer>
                            <BannarSearchComponent placeholder='Search..'/>
                            <SearchIcon/>
                        </BannarSearchComponentContainer>
                    </BannarComponentContainer> */}
                    <SearchByCitiesContainer>
                        <SearchByCities><ShareLocationSharpIcon sx={{fontSize:'40px'}}/></SearchByCities>
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
