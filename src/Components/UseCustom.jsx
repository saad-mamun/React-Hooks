import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

function UseCustom() {

    const [name, setName] = useLocalStorage('username','');
    const [id, setId] = useLocalStorage('userid', '');

  return (
    <div>
      <input type="text" placeholder='Enter your name'  
      value={name} onChange={(e)=>setName(e.target.value)}/>
      <h2>Hello, {name}</h2>

      <input type="text" placeholder='Enter your Id'  
      value={id} onChange={(e)=>setId(e.target.value)}/>
      <h2>Your id: {id}</h2>
    </div>
  )
}

export default UseCustom
