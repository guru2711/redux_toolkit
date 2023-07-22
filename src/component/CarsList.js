import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeCar} from '../store'

export default function CarsList() {
  const dispatch = useDispatch()
  const {cars} = useSelector((state) => {
    return{
   cars: state.cars.data
    }
  })
  console.log(cars)
  const handleDel = (e) => {
    // const updateState = cars.filter((car) => {
    //   return car.id !== e
    // })
    dispatch(removeCar(e))
  }
  const renderedList = cars.map((car) => {
    return (
      <div key={car.id}>
        <ul>
          {car.name} --- {car.cost}
          <button onClick={() => handleDel(car.id)} >X</button>
        </ul>
      </div>
    )
  })
  return (
    <div>{renderedList}</div>
  )
}
