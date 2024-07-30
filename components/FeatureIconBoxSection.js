const FeatureIconBoxSection = () => {
  return (
    <section className="feature-icon-box-area">
      <div className="container">
        <div className="feature-icon-box-wrapper">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="icon-box-items">
              <img src="assets/images/mortarboard.png" width="50" height="50" />
                <div className="content">
                  <h3>Démarches de visa étudiant</h3>
                  <p>Étudiez en France sans stress ! RPCH-Consulting vous accompagne pour votre visa.</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="icon-box-items active">
              <img src="assets/images/car.png" width="50" height="50" />
                <div className="content">
                  <h3>Location de voitures</h3>
                  <p>Louez la voiture parfaite avec RPCH-Consulting. Tarifs compétitifs garantis !</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="icon-box-items">
              <img src="assets/images/passport.png" width="50" height="50" />
                <div className="content">
                  <h3>Formalités de voyage</h3>
                  <p>Formalités de voyage simplifiées avec RPCH-Consulting. Passeport, visa, tout inclus !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureIconBoxSection;
