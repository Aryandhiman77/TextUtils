import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" to="/about">{props.aboutText}</a> */}
        </li>
        
      </ul>
      <form className="d-flex" role="search">
      <div className="form-check form-switch">
                    <span className={`text-${props.mode==='light'?'dark':'light'}`}>{props.btntxt}</span><input onClick={props.toggleMode} className="form-check-input btn-light" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                </div>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
// type rfc and hit enter to get react function based compoent
Navbar.prototype={
  title:PropTypes.string.isRequired,// if title is undefined then error in console
  aboutText:PropTypes.string  
};
Navbar.defaultProps = {
  title:"hey this is text U" /*Support for  defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.*/

}