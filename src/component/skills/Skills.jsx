import "./skills.scss";
import {BsFillPatchCheckFill} from "react-icons/bs"


export default function Skills() {
    
    
      return (
        <section>
       <div id="skills">
        <h5 className="section__title margin__skills">Quelles compétences j'ai</h5>
        <h2 className="section__subtitle text-light">Mon expérience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3 >Developement Frontend</h3>
            <div className="experience__content">
              <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
            </div>

          </div>

          <div className="experience__backend ">
            <h3 >Developement Backend</h3>
            <div className="experience__content">
              <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Node js</h4>
              <small className="text-light">Intermediate</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Mongodb</h4>
              <small className="text-light">Intermediate</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Laravel</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>PHP</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Mysql</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
            </div>
            
          </div>
          <div className="experience__backend ">
            <h3 >Outils de Designe</h3>
            <div className="experience__content">
              <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Photoshop</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Premiére video</h4>
              <small className="text-light">Intermediate</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Ilustrator</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Figma</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Power point</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
               <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Canva</h4>
              <small className="text-light">Experienced</small>
              </div>
               </article>
            </div>
            
          </div>



        </div>



       </div>
       </section>       
  )
}
