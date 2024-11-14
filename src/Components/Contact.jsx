import React, { useContext } from 'react'
import { AppContext } from './UseContext'

function Contact() {
    const {phone, name} = useContext(AppContext)
  return (
    <div>
      <h2>Contact</h2>
      <h3>phone: {phone}</h3>
      <h4>Name : {name}</h4>
    </div>
  )
}

export default Contact
