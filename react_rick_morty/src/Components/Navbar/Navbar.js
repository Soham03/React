import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import '../../App.css'



const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#ffcc00"}}>
        <div className="container">
          <Link to="/" className="navbar-brand fs-3 ubuntu">
            Rick & Morty <span className="text-primary">Infopedia</span>
          </Link>
          <style jsx="true">{`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}</style>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars open text-dark"></span>
            <span className="fas fa-times close text-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5">
              <NavLink activeclassname="active" to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/favourites" className="nav-link">
                Favourites
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;