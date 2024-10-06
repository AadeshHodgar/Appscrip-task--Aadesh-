import React from 'react'
import Sidebar from './components/Sidebar/Sidebarr'
import HomePage from './pages/HomePage'

function MainPage() {
  return (
    <div className='mainpage'>
      <Sidebar/>
      <HomePage/>
    </div>
  )
}

export default MainPage
