import {
  StyledHome,
  Banner,
  BannerTitle,
  BannerSubTitle,
  BannerContent,
  Features,
  Feature,
  FeatureText,
  FeatureImg,
  Booking,
  BookingText,
  RentButton,
  MainText
} from './Home.styled';

import carImage1 from '../../assests/img/volvo_xc90.jpg';
import carImage2 from '../../assests/img/subaru_outback.jpg';
import carImage3 from '../../assests/img/bentley_azure.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <StyledHome>
      <Banner>
        <BannerContent className="banner-content">
          <BannerTitle>Welcome to CarRent</BannerTitle>
          <BannerSubTitle>Your ultimate car rental solution</BannerSubTitle>
        </BannerContent>
      </Banner>

      <MainText>Explore, Experience, Enjoy</MainText>

      <Features>
        <Feature>
          <FeatureImg src={carImage1} alt="Car Rental" />
          <FeatureText>Explore the City</FeatureText>
        </Feature>
        <Feature>
          <FeatureImg src={carImage2} alt="Car Rental" />
          <FeatureText>Enjoy Road Trips</FeatureText>
        </Feature>
        <Feature>
          <FeatureImg src={carImage3} alt="Car Rental" />
          <FeatureText>Discover New Places</FeatureText>
        </Feature>
      </Features>

      <Booking>
        <BookingText>Ready for your next adventure?</BookingText>
        <NavLink to="catalog">
          <RentButton>Rent Car</RentButton>
        </NavLink>
      </Booking>
    </StyledHome>
  );
};

export default Home;
