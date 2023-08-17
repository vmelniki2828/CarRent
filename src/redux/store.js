import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./filterCars/filterCarsReducer";

export const store = configureStore({
    reducer:{
        cars: carsReducer
    }
})