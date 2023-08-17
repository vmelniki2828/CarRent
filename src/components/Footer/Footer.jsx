
import { StyledFooter, FooterLink } from './Footer.styled';
import { BsGithub, BsCCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <BsCCircle /> {new Date().getFullYear()} Developed by
        <FooterLink
          href="https://github.com/vmelniki2828/CarRent"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          aria-label="Link to Github profile"
        >
          Vlad Melnik <BsGithub />
        </FooterLink>
      </p>
    </StyledFooter>
  );
};

export default Footer;
