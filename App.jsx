import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Components/Navbar/Navbar'
import Foter from './Components/Foter/Foter'
import Home from './Components/home/Home.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      
      <Outlet></Outlet>
      <Foter></Foter>
    </div>
  )
}

export default App
