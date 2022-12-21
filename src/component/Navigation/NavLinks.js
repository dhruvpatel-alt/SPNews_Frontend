import React from 'react';

import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
  
  return <ul className="nav-links">
   <li className="nav-item"><NavLink className="nav-link" href="#" to="/">Home</NavLink></li>
   <li className="nav-item"><NavLink className="nav-link" href="#" to="/entertainment">Entertainment</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" href="#" to="/business" >Business</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/health" >Health</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/general" >General</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/sports"  >Sports</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/science" >Science</NavLink></li>
<li className="nav-item"><NavLink  className="nav-link" href="#" to="/technology"  >Technology</NavLink></li>
  </ul>
};

export default NavLinks;