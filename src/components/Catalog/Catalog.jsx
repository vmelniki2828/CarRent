import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from 'services/API/api';
import {CatalogContainer, CarsList,CarItem, CarImg} from './Catalog.styled'
import { selectCarBrands } from 'redux/filterCars/filterCarsActions';

const Catalog = () => {
    const dispatch = useDispatch()
  const [dataCurrency, setDataCurrency] = useState(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const data = await getAllCars();
        setDataCurrency(data);
      } catch (error) {
        
      }
    };
    fetchCurrency();
  }, []);

  dispatch(selectCarBrands(dataCurrency))

  return (
    <CatalogContainer>
      <CarsList>
        {dataCurrency && dataCurrency.map(({ mileage,img, make, model, type, year }) => {
          return (
            <CarItem key={mileage}>
                <CarImg src={img} alt={`Car`+ model} />
              <p>{make}</p>
              <p>{model}</p>
              <p>{type}</p>
              <p>{year}</p>
            </CarItem>
          );
        })}
      </CarsList>
    </CatalogContainer>
  );
};

export default Catalog;
