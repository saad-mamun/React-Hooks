import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [value, setValue] = useState(0);
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1
    })
    

    // Accessing dom element

    const inputElem = useRef();
    const btnClick =()=>{
        console.log(inputElem.current);
        inputElem.current.style.background = "green"
        inputElem.current.style.border = "none"
    }


  return (
    <div>
        <div>
          <h1>useRef Hook..... </h1>
          <button onClick={()=>setValue(prev => prev - 1)}>-1</button>
          <h1>{value}</h1>
       <button onClick={()=>setValue(prev => prev + 1)}>+1</button>
         <h1>Render Count: {count.current}</h1>
        </div>
        {/* Dom element */}
        <div>
            <input type="text" ref={inputElem} />
            <button onClick={btnClick}>Click Here</button>
        </div>
    </div>
  )
}

export default UseRef
