import styled from 'styled-components';

export const Container = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:60px;
${'' /* border:1px solid red; */}
position:sticky;
top:0px;
z-index:9999999;
background:transparent;
backdrop-filter: blur(20px);
box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
`
export const Wrapper = styled.div`
width:100%;
display:flex;
max-width:80%;
align-items:center;
justify-content: space-between;
@media only screen and (max-width: 700px) {
   max-width: 100%;
  }
`

export const SearchWrapper = styled.div`
width:100%;
max-width:40%;
${'' /* border:1px solid red; */}
display:flex;
align-items:center;
display: none;
@media only screen and (min-width: 700px) {
    display: block;
  }
`
export const Search = styled.input`
width:100%;
max-width:90%;
height:30px;
border-radius:5px;
border:none;
padding-left:10px;
font-size:16px;
&:focus{
    outline:none
}
`

export const LogoContainer = styled.div`
${'' /* border:1px solid red; */}

`
export const Logo = styled.div`
font-weight:600;
font-size:30px;
color:${({theme})=>theme.ThemeColor}
`
 
export const ElementWrapper = styled.div`
${'' /* border:1px solid red; */}
width:100%;
max-width:200px;
display:flex;
align-items:center;
justify-content: space-between;
@media only screen and (max-width: 400px) {
   max-width:180px;
  }
`
export const Elements = styled.div`
font-weight:600;
color:${({theme})=>theme.ThemeColor}
`
export const AccountWrapper = styled.div`
border:1px solid ${({theme})=>theme.ThemeColor};
width:100%;
max-width:30px;
height:30px;
border-radius:50%;

`
export const AccountLogo = styled.img`

`
