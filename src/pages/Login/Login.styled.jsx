import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
      display: flex;
  flex-direction: column;
  margin-left: 800px;
  margin-top: 150px;
`
export const Header = styled.h1`
     text-align: center;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;   
`

export const Text = styled.p`
    text-align: center;
    margin-top: 12px;    
`
  
export const ContactsLink = styled(NavLink)`
    color: ${props => props.theme.colors.secondBgColor};
    margin-left: 5px;
    &:hover, :focus {
        scale: 1.05;
    }
`
  
