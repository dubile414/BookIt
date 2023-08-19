import React,{useState} from 'react'
import mainLogo from "./mainLogo.png";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const [active, setActive] = useState(false)

  return (


    <>
    
    <nav className={` d-flex navbar py-1 mx-1 my-0 sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid   ">
        <div className='d-flex   '>
          <Link className="navbar-brand" to="/">
            <img src={mainLogo} alt="" width="100" height="100" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className=" justify-content-end collapse mx-3 navbar-collapse " id="navbarNavDropdown">
          {/* remove ml auto to take home near to book it in class */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-4">
              <Link className="nav-link " aria-current="page" to="/company">Home</Link>
            </li>
            <li className="nav-item   mx-4 ">
              <Link className="nav-link" to="/bmw">About</Link>
            </li>
            <li className="nav-item  mx-4">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/booked">Bookings</Link>
            </li>

          </ul>
          <div className={` form-check form-switch mx-3 my-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className=" align-self-center form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode   </label>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar