import React from 'react'
import NavComponent from './NavComponent'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <NavComponent />
      <Outlet />
    </div>
  )
}

export default Profile