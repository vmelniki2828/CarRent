import { createReducer } from '@reduxjs/toolkit';
import { selectCarBrands } from './filterCarsActions';

const initialState = {
  carBrands: [],
};

const carsReducer = createReducer(initialState, {
  [selectCarBrands]: (state, action) => {
    return { ...state, carBrands: [...state.carBrands, action.paylod] };
  },
});

export default carsReducer;
