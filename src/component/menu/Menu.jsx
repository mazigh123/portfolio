import "./menu.scss"
import * as Scroll from 'react-scroll';
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=> setMenuOpen(false)}s>
                <a href="#intro"> Acceuil</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#about">About me </a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#portfolio">Porfolio</a>
            </li >
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#qualification">Qualifcation</a>
            </li>
            
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#skills">Compétence </a>
            </li>
            
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#contact"> Contact</a>
            </li>
        </ul>


    </div>
  )
}
