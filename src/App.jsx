import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/sidebar'

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  )
}