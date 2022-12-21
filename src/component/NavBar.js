import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar =(props)=> {

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{opacity:0.85}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">SPNEWS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
          <NavLink className="nav-link" aria-current="page" href="#" to="/">Home</NavLink>
<li className="nav-item"><NavLink className="nav-link" href="#" to="/entertainment">Entertainment</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" href="#" to="/business" >Business</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/health" >Health</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/general" >General</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/sports"  >Sports</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/science" >Science</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/technology"  >Technology</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
   
}

export default NavBar