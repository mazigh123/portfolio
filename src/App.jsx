import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio"
import Topbar from "./component/topbar/Topbar"

import Testimonials  from "./component/testimonials/Testimonials"
import Contact  from "./component/contact/Contact"
import  "./app.scss"
import { useState } from "react";
import Menu from "./component/menu/Menu";
import Skills from "./component/skills/Skills";

import Qualification from "./component/qualification/Qualification";
import Footer from "./footer/Footer";
import { SocialsLinks } from "./component/SocialsLinks";

function App() {
  const[menuOpen,setMenuOpen] = useState (false)
  return (
    <div className="app">
      <Topbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <SocialsLinks/>
        <Intro/>
        <Testimonials/>
        <Portfolio/>
        <Qualification/>
        <Skills/>
        
        <Contact/>
        <Footer/>
        
        
      </div>
    </div>
  );
}

export default App;
