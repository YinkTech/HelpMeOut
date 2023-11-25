import React from 'react'
import App from '../container/App'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import VideoPreview from '../components/VideoPreview'

const SwitchRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/home'  element={<App />} exact/>
        <Route path='/'  element={<Login />} />
        <Route path='/ready'  element={<VideoPreview />} />
      </Routes>
    </div>
  )
}

export default SwitchRoutes