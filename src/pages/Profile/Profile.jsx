import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
   const {state} = useLocation()
  return (
    <div>Profile</div>
  )
}

export default Profile