import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
   const {state} = useLocation()
   console.log(state);
  return (
    <div>
        <h1>{state.name}</h1>
    </div>
  )
}

export default Profile