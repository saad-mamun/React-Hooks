import React,  { useEffect, useState } from 'react'
function UseEffect() {

    //useEffect(cd,d) Follow from here
    // cd = callBack function
    //d = dependencies

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count + 1)
        },2000)
    },[count])

  return (
    <div>
        <h1>useEffect Hook...........</h1>
       <div>
        <h1>I've  rendered {count} times!</h1>
       </div>
    </div>
  )
}

export default UseEffect
