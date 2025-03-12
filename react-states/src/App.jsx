import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [color,setColor]=useState('red')

 const changeColor=()=>{
  setColor("blue")
 }
 const [car, setCar]=useState({
  color:'black',
  brand:'ferrari',
  country:'Germany',
  model:'M34',
 })

const switchCar=()=>{
  setCar((prev)=>{
    return{
      ...prev,
    color:'red',
    }
  })
}
const [Count,setCount]=useState(0)
const increaseCount=()=>{
  setCount(prev=>prev+1)
  setCount(prev=>prev+1)
  setCount(prev=>prev+1)
  setCount(prev=>prev+1)
}

const [RenderCount,setRenderCount]=useState(0)

useEffect(()=>{
  setTimeout(()=>{
    setRenderCount(RenderCount=>RenderCount+1) 
  },2000)
},[Count,RenderCount])

  return (
    <>
      <h1>Count: {Count}</h1>
      <h1>I've rendered {RenderCount} times</h1>
      <h1>My name is Braison, I am a favor of God <br /> My favor color is {color} </h1>
      <h3>I drive a {car.color} {car.brand} from {car.country} {car.model} </h3>
      <button onClick={increaseCount}>Increment by 4</button>
      <button onClick={changeColor}>Change color</button>
      <button onClick={switchCar}>Change car</button>
    </>
  )
}

export default App
