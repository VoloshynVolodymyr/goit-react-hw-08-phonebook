import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 20px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active,
  &:hover,
  &:focus {
    color: #8879b0;
  }
  
    margin-right: 20px;
  
`

export const Header = styled.header`
  padding: 16px 0px;
  display: flex;
  box-shadow: rgba(136, 121, 176, 0.4) 0px 3px 8px;
  position: fixed;  
top: 0;  
z-index: 100;  
width: 100%;
`

export const Nav = styled.nav`
    display: flex;
    &:not(:last-child) {
  margin-right: 20px;}
`

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  margin: 20px;
  font-size: 17px;
  border: 2px solid var(--accent-color);
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  color: var(--accent-color);
  background-color: none;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);;
  cursor: pointer;
  :hover {
  color: var(--primary-white-color);
  background-color: var(--accent-hover-color);
  border-color: var(--accent-hover-color);
}
`

export const HomeText = styled.p`
    margin-left: 2px;
`

export const NavToContacts = styled.div`
    display: flex;
`

export const NavToLogin = styled.div`
    display: flex;
    margin-left: auto;
`