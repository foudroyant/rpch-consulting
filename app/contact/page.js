import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/layouts/Layout";
const page = () => {
  return (
    <Layout footer={2} header={4} single={true}>
      <Breadcrumb pageName="Contactez-nous" />
      <section className="contact-main-area fix section-padding">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 offset-lg-3">
                <div className="contact-content">
                  <div className="section-title mb-2">
                    {/*<span className="wow fadeInUp">Get In Touch</span>*/}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Contactez-nous
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  Vous êtes prét à poursuivre vos études en France ? Con-
tactez RPCH Consulting dés aujourd'hui pour bénéficier
da notre expertise et de notre accompagnement personnalisé.
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Localisation</h5>
                          <p>
                          Brazzaville : <br />
                          62, Rue Bouzala Moungali Réf : Croisement rue Itoumbi et la rue du Marché 10f
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Localisation</h5>
                          <p>
                          Pointe-Noire : 09 Avenue Bolobo Centre-Ville
                          Réf : En face de la boutique Aldo
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="far fa-phone" />
                        </div>
                        <div className="content">
                          <h5>Telephone</h5>
                          <a href="tel:+242 06 505 62 56">+242 06 505 62 56</a> <br />
                          <a href="tel:+242 04 013 33 23">+242 04 013 33 23</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <a href="mailto:contact@rpch-consulting.fr" className="link">
                            contact@rpch-consulting.fr
                          </a>{" "}
                          <br />
                          <a href="mailto:infos@rpch-consulting.fr" className="link">
                          infos@rpch-consulting.fr
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fad fa-share-alt" />
                        </div>
                        <div className="content">
                          <h5>Réseaux sociaux</h5>
                          <div className="social-icon d-flex align-items-center">
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact-image wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="assets/images/banniere_voyage.jpg" alt="img" />
                  </div>
                </div>
              </div>
              {/*<div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Fill Up The Form
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form action="contact.php" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Your Messege here"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span>
                            <i className="fal fa-paper-plane" />
                            Get In Touch
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/*<< Map Section Start >>*/}
      {/*<div className="map-section">
        <div className="google-map wow fadeInUp" data-wow-delay=".7s">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
            </div>*/}
    </Layout>
  );
};
export default page;
