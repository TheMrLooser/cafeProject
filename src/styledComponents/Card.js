import styled from "styled-components";

export const Container = styled.div`
width:250px;
${'' /* border:1px solid red; */}
border-radius:5px;
box-shadow:3px 2px 5px gray;
`

export const Wrapper = styled.div`
width:100%;
max-width:250px;
height:300px;
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
border-radius:5px;
gap:5px;


`
export const  ImagesContainer = styled.div`
width:100%;
height:160px;
border-radius:5px;

`
export const  Images = styled.img`
width:100%;
height:100%;
border-radius:5px;

`
export const  DetailContainer = styled.div`
width:100%;
max-width: 90%;

`
export const  Heading = styled.div`
font-size: 28px;
display: flex;
justify-content: center;
width:100%;

`
export const  Rating = styled.div`
display: flex;
justify-content:flex-end;
width:100%;

`
export const  Distance = styled.div`
width:100%;

`