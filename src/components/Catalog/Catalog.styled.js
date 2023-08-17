import styled from 'styled-components';

export const CatalogContainer = styled.div`
  width: 1184px;
  margin: 0 auto;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

export const CarItem = styled.li`
  margin-right: 29px;
  &:nth-child(4n) {
    margin-right: 0px;
  }
`

export const CarImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;
