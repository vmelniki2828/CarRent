import styled from 'styled-components';

export const StyledHome = styled.div`
  font-family: Arial, sans-serif;
`;

export const Banner = styled.section`
  position: relative;
  text-align: center;
  background-color: #f0f0f0;
  padding: 50px 0;
`;

export const BannerContent = styled.div`
  margin-bottom: 20px;
`;

export const BannerTitle = styled.h1`
  font-size: 36px;
  margin: 0;
`;

export const BannerSubTitle = styled.p`
  font-size: 18px;
  color: #888;
`;

export const MainText = styled.p`
  text-align: center;
  font-size: 40px;
`

export const Features = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

export const Feature = styled.div`
  text-align: center;
`;

export const FeatureText = styled.p`
  font-size: 18px;
`;

export const FeatureImg = styled.img`
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  transition: transform 0.3s;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.05);
  }
`;

export const Booking = styled.section`
  text-align: center;
  margin-top: 40px;
`;

export const BookingText = styled.p`
  font-size: 40px;
  margin-bottom: 30px;
`

export const RentButton = styled.button`
  background-color: var(--main-color);
  color: white;
  padding: 30px 50px;
  font-size: 25px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
`;
