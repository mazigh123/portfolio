import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"
import { SocialsLinks } from "../SocialsLinks";
import {MdKeyboardArrowRight} from "react-icons/md"


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef)
    init(textRef.current, {
       showCursor: false,
       backDelay:1500,
       backSpeed:60,
       strings: ['Developper Front-End ', 'Designer' ] })
    
  }, []);

  return (
     <section>
     <div
      className=" w-full  "
      id="intro"
    >
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center  px-4 md:flex-row '>
            <div className='flex flex-col justifier-centrer h-complet '>
            <h2 className = " mt-32 text-4xl font-bold text-white sm:text-4xl md:text-4xl lg:text-6xl lg:h-20">Bonjour à tous,je m'appelle</h2>
              
          <h1 className = "text-2xl sm:text-3xl font-bold text-white">Amazigh Boumedjmadjen</h1>
          
          < p  className = "text-gray-500 py-4 max-w-md" >
            J'ai 2 ans d'expérience dans la construction et la conception de logiciels.
            Actuellement, j'adore confectionner les interfaces d'applications web et mobile en utilisant des technologies comme
            React js, Tailwind, Android.
          </p >
          <h3 className="text-2xl sm:text-2xl font-bold text-white">Freelance    <span className="freelance" ref={textRef}> </span></h3>
          <div>
          <a href="#portfolio">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer p-6">
              Portfolio
              <span  className = "group-hover:rotate-90 duration-300">
               <MdKeyboardArrowRight size = { 25 }  className = "ml-1"/>
              </span>
               
            </button>
            </a>
          </div>
            </div>
        <div>
          <img
            src="assets/mazigh.png"
            alt="my profile"
            className="rounded-2xl mx-auto  md:w-full "
          />
        </div>
      </div>
      <SocialsLinks />
    </div>
    </section>
    
  );
}
