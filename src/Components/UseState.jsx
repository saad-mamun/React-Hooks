import React, {useState} from 'react'

function UseState() {

    const [color ,setColor] = useState('Red')
const colorHandle = ()=>{
  setColor('Blue')
};

const [car, setCar] = useState({
  brand:"Ferrari",
  model:"Roma",
  year:"2023",
  color:"red"
});

const changeColor = ()=>{
  setCar((prev)=>{
    return {...prev, color: "Blue"}
  })
}

const [count, setCount] = useState(0)
const increaseCount = ()=> {
  // setCount(count+1)    //1.
  //2.   ak shathe aker odhik number increase korte chaile.... prev => prev + 1 ai mathod a kaj kore
  setCount(count=> count + 1)
  setCount(count=> count + 1)
  setCount(count=> count + 1)
  setCount(count=> count + 1)
}


    
  return (
    <div>
    <div>
      <h1>The color name is {color}</h1>
      <button onClick={colorHandle}>blue</button>
    </div>
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model}  from {car.year}</p>
      <button onClick={changeColor}>Blue</button>
    </div>
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  </div>
  )
}

export default UseState
