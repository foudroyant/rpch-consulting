"use client";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
const AboutSection = () => {
  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image-items">
              <div className="circle-shape">
                <img
                  src="assets/img/about/circle.png"
                  alt="img"
                  className="text-circle"
                />
                <div className="award-img">
                  <img src="assets/img/about/award.png" alt="img" />
                </div>
              </div>
              <div className="border-shape">
                <img src="assets/img/about/border-shape.png" alt="shape-img" />
              </div>
              <div
                className="about-image bg-cover wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: 'url("assets/images/etudiante.jpeg")',
                }}
              >
                <div
                  className="about-image-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {/*<img src="assets/img/about/about-2.jpg" alt="about-img" />*/}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="about-content">
              <div className="section-title">
                <span className="wow fadeInUp">Ils nous ont fait confiance</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Assistance complète pour un avenir radieux en France.
                </h2>
              </div>
              <p className=" mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
              Chez RPCH-Consulting, nous simplifions les démarches de visa étudiant en offrant une assistance complète et personnalisée, incluant l'attestation de virement irrévocable et l'hébergement en France.
              </p>
              <div className="circle-progress-bar-wrapper">
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <ProgressBar value={90} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      Réussite <br />
                      
                    </h6>
                  </div>
                </div>
                <div
                  className="single-circle-bar wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <ProgressBar value={93} color={"#166FD3"} />
                  <div className="content">
                    <h6>
                      D'étudiants <br />
                      accompagnés
                    </h6>
                  </div>
                </div>
              </div>
              <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <i className="far fa-check me-2" />
                  Accompagnement personnalisé
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Préparation et soumission du dossier
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Expertise et connaissance approfondie
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Preuves d'hébergement partout en France
                </li>
                <li>
                  <i className="far fa-check me-2" />
                  Attestation de virement irrévocable
                </li>
              </ul>
              <div className="about-author">
                <div className="about-button wow fadeInUp" data-wow-delay=".8s">
                  <Link href="/about" className="theme-btn">
                    <span>
                      Plus d'informations
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="author-image wow fadeInUp" data-wow-delay=".9s">
                  <img src="assets/img/about/author.png" alt="author-img" />
                  <div className="content">
                    <img src="assets/img/about/signature.png" alt="signature" />
                    <p>Léquipe de RPCH-Consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
