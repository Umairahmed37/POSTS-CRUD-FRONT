import React from 'react'
import App from './App'
import Navbar from './Mycomponents/Navbar'
import About from './Mycomponents/About'
import Create from './Posts/Create'
import UpdatePost from './Posts/UpdatePost'
import SinglePost from './Posts/SinglePost'
import Privateroute from './Mycomponents/Privateroute'
 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Mycomponents/Login'


const LinkRoutes = () => {
 
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/"  element={<App />} />
          <Route exact path="/About" element={<About/>} />
          <Route path="/Create" exact element={<Privateroute component={Create} />} />
          <Route exact path="/post/:slug" element={<SinglePost/>} />
          <Route path="/post/update/:slug" exact element={<Privateroute component={UpdatePost} />} />
          <Route exact path="/login" element={<Login />} />
 

        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default LinkRoutes
