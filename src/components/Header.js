import React from 'react';
import "../css/Header.css";
import {Link} from 'react-router-dom'


class Header extends React.Component{
    render(){
        return(
          <header className="Container-fluid sticky-top">
            <div className="container " >
              <nav className="navbar navbar-expand-lg header-nav-bar sticky-top">
                <Link to = '/' className="navbar-brand">Simplify <span className='inline'>Payroll</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-right"></i>
                </button>
              
                <div className="collapse navbar-collapse font-14 hover-dropdown" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto list-item">
                    <li className="nav-item active">
                      <Link to ='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="html">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="html">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="html">Login</a>
                    </li>

                  </ul>

                  <div className="act-buttons">
                    <Link  to={"/signup"} className="btn btn-success font-14">Sign up</Link>
                  </div>
                </div>
              </nav>
            </div>

          </header>


        )
    }
}


export default Header