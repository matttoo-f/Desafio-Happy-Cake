import { Routes, Route } from 'react-router-dom'
import './App.css'
import { FaHome } from "react-icons/fa"
import { MdContactPage } from "react-icons/md"

import Contact from './views/Contact'
import Home from './views/Home'
import NavBar from './components/Navbar'
import NotFound from './views/NotFound'

function App() {

  const LinkNav = [
    {to: "/", name:"Home", icon :<FaHome/>},
    {to: "/contact", name:"Contact",icon : <MdContactPage/>}
  ]

  return (
    <>
        <NavBar nav={LinkNav}/>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App
