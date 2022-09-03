import styled from 'styled-components';




export const  Container = styled.div`
width:100%;
max-width:100%;
align-items:center;
justify-content:center;
display:flex;
padding-top:40px;
${'' /* border:1px solid red; */}
position:relative;
`
export const  Wrapper = styled.div`
width:100%;
max-width:95%;
${'' /* border:1px solid red; */}
position:relative;

`

export const  BannarDetailContainer = styled.div`
width:100%;
max-width:100%;
height:inherit;
background:transparent;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${'' /* border:1px solid red; */}

`
export const  BannarTextContainer = styled.div`
width:100%;
max-width:70%;
background:#ffffffa1;
border-radius:10px;
padding:10px;


`
export const  BannarHeading = styled.div`
font-size:50px;
font-weight:700;
color:${({theme})=> theme.ThemeColor};
`
export const  BannarSubHeading = styled.div`
color: ${({theme})=> theme.ThemeColor};

`
export const  BannarComponentContainer = styled.div`
width:100%;
max-width:70%;
height:10vh;
${'' /* border:1px solid red; */}
display:flex;
align-items:center;
gap:20px;
`
export const  BannarSetLocationComponentContainer = styled.div`
width:100%;
background:white;
max-width:100px;
border-radius:5px;
box-shadow:3px 3px 5px #c8c8c8;
`
export const  BannarSetLocationComponent = styled.div`
width:100%;
background:white;
display:flex;
align-items:center;
justify-content:space-between;

height:40px;
border-radius:5px;
padding-left:5px;
`
export const  BannarSearchComponentContainer = styled.div`
width:100%;

`
export const  BannarSearchComponent = styled.input`
width:100%;
height:40px;
border-radius:5px;
border:none;
padding-left:10px;
font-size:16px;
box-shadow:3px 3px 5px #c8c8c8;
&:focus{
     
    outline:none;
}
`

export const SearchByCitiesContainer = styled.div`
width:100%;
max-width:70%;
${'' /* border:1px solid red; */}
display:flex;
gap:10px;

`
export const SearchByCities = styled.div`
width:50px;
height:50px; 
border-radius:50%;
border:3px solid #00f3ff;
display:flex;
align-items:center;
justify-content:center;
${'' /* box-shadow:2px 2px 4px #00f3ff; */}

`