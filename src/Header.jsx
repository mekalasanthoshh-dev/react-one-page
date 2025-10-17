import { Link } from "react-router-dom";

function Header(){
  return (
    <>
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
    <div className="container"> 
    <a className="nav-brand" href="#">One Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
    <ul className="navbar-nav ms-auto navigation-menu">
    <li className="nav-item"> 
    <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#aboutus">About Us</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#services">Services</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#portfolio">Portfolio</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#team">Team</a>
    </li>
    
    <li className="nav-item">
    <a className="nav-link" href="#faqs">FAQ's</a>
    </li>
    
    <li className="nav-item">
    <a className="nav-link" href="#contact">Contact Us</a>
    </li>
    </ul> 
    </div>
    </div>
    </nav>
    </>
  )
}
export default Header;