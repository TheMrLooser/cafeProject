import styled from 'styled-components';

export const Container = styled.div`
width:100%;
// border: 1px solid red; 
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #192e3d;

`

export const Wrapper = styled.div`
width: 100%;
max-width: 95%;


`

export const Heading = styled.h1`
width: 100%;
height: 50px;
font-size: 34px;
color: white;
margin-top: 14px;
display: flex;
align-items: center;


`

export const Description = styled.div`
width: 100%;
max-width: 90%;
// height: 20px;
border: 1px solid white;
padding-left: 1%

`
export const NavContainer = styled.div`
width: 100%;
max-width: 95%;
height: 70px;
// border: 1px solid red;
display: felx;
gap: 20px;
// justify-content: center;
align-items: center;


`
export const NavElements = styled.div`
width: 100%;
max-width: 100px;
padding: 0px 10px;
border-radius: 9px;
border: 1px solid green;
height: 30px;
display: felx;
justify-content: center;
align-items: center;
color: white;
cursor: pointer;

`



export const About = styled.div`
width: 100%;
// display: flex;
// align-item: center;
// justify-content: center;
color: white;
// border: 1px solid red;

`

export const ElementContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;




`

export const Title = styled.h4`
font-size: 17px;
color: #7d9aaf;
font-family: Arial, Helvetica, sans-serif;


`

export const Element = styled.h5`
color: #beb695;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif

`


export const AboutCafe = styled.div`
width: 100%;
border-top: 1px solid grey;
font-size: 14px;
margin-top: 10px;
padding-top: 10px; 
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: #8f8e8b;
padding-bottom: 30%;

`

export const Menu = styled.div`
width: 100%;
max-width: 100%;
display: flex;
justify-content: center;
object-fit: cover;
padding-bottom: 10%;


`

export const MenuImage = styled.img`
// height: 35%;
width: 18%;
@media only screen and (max-width: 500px) {
    width: 95%;
}

`

