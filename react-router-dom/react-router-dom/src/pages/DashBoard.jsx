import React from 'react'
import { useNavigate, Route, Routes, Outlet } from 'react-router-dom'

function DashBoard() {
  const navigate = useNavigate()
  
  function handleClick(){
    navigate('/login')
  }
  
  return (
    <div>DashBoard
      <button onClick={handleClick}>
        LogOut
      </button>

      <Outlet />
    </div>
  )
}

export default DashBoard