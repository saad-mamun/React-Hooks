import React, { useState, useMemo } from 'react'

function UseMemo() {

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNum(num){
        console.log("Calculetion dome");
        return Math.pow(num, 3) //cube/4  math
    }

    const result = useMemo(()=>
       cubeNum(number)
    ,[number])

  return (
    <div>
        <div>
          <h1>useMemo Hook....</h1>
          <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
          <h1>Cube of the number: {result}</h1>
        </div>

        <div>   
          <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
          <h1>Counter: {counter}</h1>
        </div>
    </div>
  )
}

export default UseMemo
