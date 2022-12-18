import "./testimonials.scss"

export default function Testimonials() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv_amazigh.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'cv_amazigh.pdf';
            alink.click();
        })
    })
}

  
  
  return (
    <section>
      <div id="about">
      <h5 className="section__title margin__about">A propos de moi</h5>
        <h2 className="section__subtitle text-light">A propos de moi</h2>
        <div className="container test__container">
           <div className="test__frontend">
            
            <div className="test__content">
            <div>
                <div className="shadow">
                  <div className="about-img">
                    <img src="assets/maz.jpg" alt="" />
                  </div>
                </div>
                <h2 className="title__boum">Boumedjmadjen Amazigh</h2>
                <h3 className="subtitle__work">Web developer & designer</h3>
                
                   
              </div>
            </div>

           </div>
           <div className="test__frontend">
            
            <div className="test__content">
            <div className="about__apropo">
                <h1>
              Hello
            </h1>
            <h2>Voici qui je suis et Mon Curicullum Vitae</h2>
            <div class="about-btns">
             <button  onClick={onButtonClick} class="btn btn-pink" >
             resume / CV
              </button>
            </div>
            <div class="about__bio">
              Diplômé d'un master en informatique spécialité Génie Logiciel a
              l'univérsité Abderrahmane Mira Bejaia , je suis spécialisé dans le
              devlopement Web et Mobile, la conception et les tests de
              logiciels. J'aime travailler en équipe et suis je capable d'apprendre
              et d'appliquer rapidement de nouvelles technologies.
            </div>
              </div>
            </div>

           </div>

        </div>

      </div>
      </section>    
  );
}
