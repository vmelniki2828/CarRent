import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--main-color);
  color: white;
  padding: 20px;
`;

export const Logo = styled.span`
  font-size: 24px;
  margin-right: 100px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  margin-right: 20px;
`;

export const NavItem = styled.li`
    margin-right: 60px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none; 
  color: white;
`