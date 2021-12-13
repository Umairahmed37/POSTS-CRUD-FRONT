import React from 'react'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getuser } from '../Posts/AuthData';
import { logout } from '../Posts/AuthData';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md bg-light ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">  Off canvas navbar </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li className="nav-item">
                  <Nav.Link as={Link} to="/" className="nav-link active" aria-current="page" >Home</Nav.Link>
                </li>
                <li className="nav-item dropdown">
                  <Nav.Link className="nav-link dropdown-toggle" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Post
                  </Nav.Link>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><Nav.Link as={Link} to="/Create" className="dropdown-item" >Create a Post</Nav.Link></li>

                  </ul>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to="/About" className="nav-link" >About</Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link as={Link} to="/Contact" className="nav-link" >Contact</Nav.Link>
                </li>

                {
                  !getuser() && (
                    <li className="nav-item">
                      <Nav.Link as={Link} to="/Login" className="nav-link" >Log In</Nav.Link>
                    </li>
                  )
                }
                {
                  getuser() && (
                    <li className="nav-item" >
                      <Nav.Link  onClick={() => logout(() => navigate('/'))} className="nav-link" >Log Out</Nav.Link>
                    </li>
                  )
                }

                <li id="Profile" className="nav-item">
                  <Link to={"/"}> <Avatar sx={{ bgcolor: deepOrange[300] }}>U</Avatar> </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav >


    </div >
  )
}

export default Navbar
