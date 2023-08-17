import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--main-color);
  color: white;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const FooterText = styled.p`
    color: white;
`

export const FooterLink = styled.a`
  margin-left: 10px;
  font-size: 16px;
  color: white;
  text-decoration: none; 

  &:hover {
    color: aquamarine;
  }
`;
