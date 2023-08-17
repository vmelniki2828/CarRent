
import { StyledHeader, Logo, Navigation, NavList, NavItem, StyledLink } from './Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Logo>CarRent</Logo>
      <Navigation>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="catalog">Catalog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="favorites">Favorites</StyledLink>
          </NavItem>
        </NavList>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
