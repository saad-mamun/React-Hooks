import React, { useCallback, useState } from 'react'
import Header from './Header';

function UseCallback() {

    const [count,setCount] = useState(0);

    // ai Function gulo current page er jonno
    const newFn = () => {} // rerendered function
    const newFnc = useCallback(()=>{},[]) // rerendered hobe na
    // const newFnc = useCallback((count)=>{},[count]) // rerendered hobe

  return (
    <div>
        <div>
            <Header newFnc={newFnc} />
            <h1>{count}</h1>
            <button onClick={()=> setCount(prev => prev + 1)}>Click Me</button>
        </div>
    </div>
  )
}

export default UseCallback
