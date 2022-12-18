import "./topbar.scss"
import React from "react"


export default function Topbar({ menuOpen, setMenuOpen }) {

 
  
  
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
      <div className="wraper">
        <div className="left">
          <a href="#intro" className="logo">
            Maz-dev.
          </a>
          
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
