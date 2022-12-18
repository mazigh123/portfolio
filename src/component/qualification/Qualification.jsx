import React ,{ useState } from "react";
import "./qualification.scss"



export default function Qualification() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab=(index) => {
    setToggleState(index);
  };
  
  return (
    
    
      <section className="qualification section" id="qualification">
        <h5 className="section__title margin__qualif">Qualification</h5>
        <h2 className="text-light">My personel journey</h2>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={()=> toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon">
                Education
              </i>
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button  button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon">
                Experience
              </i>
            </div>
          </div>

          <div className="qualification__section">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Master en Génie logiciel</h3>
                  <span className="qualification__subtitle">
                  Université Abderrahmane Mira{" "}
                  </span>
                  <div className="text-light">
                    <i className="uil uil-calender-alt"></i>2020-2021 
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Licence en systéme Informatique</h3>
                  <span className="qualification__subtitle">
                  Université Abderrahmane Mira{" "}
                  </span>
                  <div className="text-light">
                    <i className="uil uil-calender-alt"></i>2018-2019
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Baccalauréat option sciences expérimentales</h3>
                  <span className="qualification__subtitle">
                  Lycée Chouhada
Chikhoune Bejaia {" "}
                  </span>
                  <div className="text-light">
                    <i className="uil uil-calender-alt"></i>2015-2016
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content "
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Stage Développeur Web</h3>
                  <span className="qualification__subtitle">
                    Entreprise portuaire de Bejaia{" "}
                  </span>
                  <div className="text-light">
                    <i className="uil uil-calender-alt"></i>2020-2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Stage Développeur Mobile</h3>
                  <span className="qualification__subtitle">Entreprise portuaire Bejaia </span>
                  <div className="text-light">
                    <i className="uil uil-calender-alt"></i>2018-2019
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Développeur Font-end </h3>
                  <span className="qualification__subtitle">
                  Freelance{" "}
                  </span>
                  <div className="text-light">
                    <i className="uil uil-calender-alt"></i>2021 A ce jour
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    
    
  );
}
