import { createSlice,nanoid } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name:"cars",
    initialState:{
        searchTerm:"",
        data : []
    },
    reducers:{
        addCar(state,action){
            state.data.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
        },
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        removeCar(state,action){
            const updatedData = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updatedData
        }
    }
})

export const {addCar,changeSearchTerm,removeCar} = carSlice.actions
export const carsReducer = carSlice.reducer