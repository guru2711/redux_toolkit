import { configureStore } from "@reduxjs/toolkit";
import {formReducer,changeName,changeCost} from "./slices/FormSlice"
import {carsReducer,addCar,changeSearchTerm,removeCar} from "./slices/CarSlice"


const store = configureStore({
    reducer:{
        form:formReducer,
        cars:carsReducer
    }
})

export  {store,addCar,changeSearchTerm,removeCar,changeName,changeCost}