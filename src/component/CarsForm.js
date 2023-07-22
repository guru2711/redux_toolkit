import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { changeName,changeCost,addCar } from '../store'


export default function CarsForm() {
  const dispatch = useDispatch()
  const {name,cost} = useSelector((state) => {
    return {
    name: state.form.name,
    cost: state.form.cost,
    }
  })
  const handleNameChange = (e) => {
   dispatch(changeName(e.target.value))
  }
  const handleValueChange = (e) => {

    dispatch(changeCost(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCar({name,cost}))
  }
  return (
      <form onSubmit={handleSubmit}>
    <div>

      <div>
      <label>Name</label>
      <input type='string' 
      name={name}
       onChange={handleNameChange}/>
      
      <label>Cost</label>
      <input type='number' 
      name={cost || 0}
      onChange={handleValueChange}/>
      <button>Submit</button> 
      </div>
      </div>
      </form>
  )
}
