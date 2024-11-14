import React, { useContext } from 'react'
import Contact from './Contact'
import { AppContext } from './UseContext'

function Profile() {
    const name = useContext(AppContext)
  return (
    <div>
      <h1>Profile</h1>
      <Contact/>
    </div>
  )
}

export default Profile
