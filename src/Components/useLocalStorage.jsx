import React, {useState, useEffect} from 'react'

function useLocalStorage(key, initialValue) {

    const [name, setName] = useState(
        localStorage.getItem(key) ?
        localStorage.getItem(key) : initialValue
    );

    useEffect(()=>{
        localStorage.setItem('username',name)
    },[name, key])

  return  [name, setName]
}

export default useLocalStorage
