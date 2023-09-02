import React from 'react';

function Navbar() {
  return (
    <>
      <div className="container">
        <nav>
          <h1>
            <span>S</span>udha Murty.
          </h1>
          <ul id="sidemenu">
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Career">Career</a>
            </li>
            <li>
              <a href="#Personal">Personal Life</a>
            </li>
            <li>
              <a href="#Awards">Awards</a>
            </li> 
          </ul>
        </nav>
        <div/>
        
      <div id="about">
        <div className="row">
          <div className="about-col-1">
             <div className="header-text">
              <p>Educator , Author , Philanthropist.</p>
              <h1>
                Chairperson of{' '}
                <span>
                  Infosys <br></br>Foundation.
                </span>
              </h1>
            </div>
          </div>
          <div className="about-col-2">
          <img src="main.jpg" alt=""></img>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Navbar;
