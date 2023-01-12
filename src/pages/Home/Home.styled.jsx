import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-top: 80px;  
    margin-top : 200px;
    margin: 150px auto;
`
export const Info = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
   
`
  
export const Icon = styled.div`
    margin-bottom: 10px;
`

export const Header = styled.h1`
    font-size: 34px; 
`  

export const Welcome = styled.span`
    color: ${props => props.theme.colors.titleColor}; 
    
`

export const Message = styled.p`
    font-size: 18px;
    margin-bottom: 24px; 
`
  
export const ContactsLink = styled(NavLink)`
display: flex;
margin-left: auto;
margin-right: auto;
justify-content: center;
padding: 8px 40px;
width: 200px;
font-size: 16px;
font-weight: 500;
border: none;
border-radius: 6px;
text-decoration: none;
font-weight: 400;
color: ${props => props.theme.colors.whiteColor}; 
background-color: ${props => props.theme.colors.secondBgColor};
transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
&:hover {
    background-color: ${props => props.theme.colors.whiteColor};
    color: ${props => props.theme.colors.secondBgColor};}
`
  
