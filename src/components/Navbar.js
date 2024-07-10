import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
    <div>
         <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container">
    <Link className="navbar-brand" to="/textutils">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/textutils">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <span>Change theme</span>
        <div onClick={()=>{props.changeback('primary')}} className='bg-primary rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
        <div onClick={()=>{props.changeback('secondary')}} className='bg-secondary rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
        <div onClick={()=>{props.changeback('success')}} className='bg-success rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
        <div onClick={()=>{props.changeback('danger')}} className='bg-danger rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
        <div onClick={()=>{props.changeback('warning')}} className='bg-warning rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
        <div onClick={()=>{props.changeback('light')}} className='bg-light rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}}></div>
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