import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import SecondaryNav from './components/secondaryNav'

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="mycontainer">
        <SecondaryNav />
        <Outlet />
      </div>
    </>
  )
}