"use client";
import AboutSection from "@/components/AboutSection";
import Breadcrumb from "@/components/Breadcrumb";
import Marque from "@/components/Marque";
import NewsSection from "@/components/NewsSection";
import ServiceCounterSection from "@/components/ServiceCounterSection";
import ServiceSection from "@/components/ServiceSection";
import TeamSection from "@/components/TeamSection";
import BrandSlider from "@/components/sliders/BrandSlider";
import Testimonial4Slider from "@/components/sliders/Testimonial4Slider";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  return (
    <Layout footer={2} header={4} single={true}>
      <Breadcrumb />
      <section className="about-section fix section-padding">
        <AboutSection />
      </section>

      <section className="manage-it-section fix section-padding">
        <div className="container">
          <div className="manage-it-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="manage-it-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">À propos de RPCH-Consulting</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Bienvenue chez RPCH-Consulting
                    </h2>
                  </div>
                  <Tab.Container defaultActiveKey={"approach"}>
                    <div className="single-tab-items mt-4 mt-md-0">
                      <Nav as={"ul"} className="nav mb-4" role="tablist">
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".3s"
                          role="presentation"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey={"approach"}
                            href="#approach"
                            data-bs-toggle="tab"
                            className="nav-link"
                            aria-selected="true"
                            role="tab"
                          >
                            Notre Mission
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".5s"
                          role="presentation"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey={"project"}
                            href="#project"
                            data-bs-toggle="tab"
                            className="nav-link"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            Pourquoi Choisir RPCH-Consulting ?
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as={"li"}
                          className="nav-item wow fadeInUp"
                          data-wow-delay=".7s"
                          role="presentation"
                        >
                          <Nav.Link
                            as={"a"}
                            eventKey={"advisory"}
                            href="#advisory"
                            data-bs-toggle="tab"
                            className="nav-link"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            Contactez-Nous
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="tab-content">
                        <Tab.Pane
                          eventKey="approach"
                          className="tab-pane fade"
                          role="tabpanel"
                        >
                          <div className="tab-content-items">
                            <p className="wow fadeInUp" data-wow-delay=".3s">
                            Chez RPCH Consulting, notre mission est de rendre chaque étape de votre processus administratif aussi simple et agréable que possible. Nous nous engageons à offrir des solutions innovantes et efficaces, tout en maintenant des standards élevés de qualité et de sécurité. Votre satisfaction est notre priorité absolue.
                            </p>
                            <div className="list-area">
                              <ul className="wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                  <i className="fas fa-check" />
                                  Nous réduisons la complexité des démarches administratives en offrant des services clés en main et une assistance personnalisée.
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Nous utilisons les dernières technologies et des approches novatrices pour améliorer l'efficacité et la rapidité des procédures.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="project"
                          className="tab-pane fade"
                          role="tabpanel"
                        >
                          <div className="tab-content-items">
                            <p>
                            Chez RPCH Consulting, nous sommes dédiés à fournir des services complets pour faciliter vos démarches administratives, qu'il s'agisse de visas étudiants, de formalités de voyage, ou de location de voitures. Notre mission est de simplifier ces processus pour nos clients, en leur offrant une assistance personnalisée et professionnelle.
                            </p>
                            <div className="list-area">
                              <ul>
                                <li>
                                  <i className="fas fa-check" />
                                  Notre équipe de professionnels expérimentés maîtrise les exigences administratives et les procédures complexes.
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Nous nous engageons à fournir des services de haute qualité, garantissant la satisfaction de nos clients.
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Nous offrons un accompagnement personnalisé pour répondre aux besoins spécifiques de chaque client, assurant une expérience sans tracas et efficace.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="advisory"
                          className="tab-pane fade"
                          role="tabpanel"
                        >
                          <div className="tab-content-items">
                            <p>
                            Prêt à discuter de vos besoins administratifs ? Contactez RPCH Consulting dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider à atteindre vos objectifs de voyage, d'études ou de mobilité professionnelle. Avec notre expertise et notre engagement envers l'excellence, vous êtes entre de bonnes mains.
                            </p>
                            <div className="list-area">
                              <ul>
                                <li>
                                  <i className="fas fa-check" />
                                  Brazzaville :
62, Rue Bouzala Moungali Réf : Croisement rue Itoumbi et la rue du Marché 10f
                                </li>
                                <li>
                                  <i className="fas fa-check" />
                                  Pointe-Noire : 09 Avenue Bolobo Centre-Ville Réf : En face de la boutique Aldo
                                </li>
                              </ul>
                            </div>
                            <Link href="contact" className="theme-btn">
                              <span>
                                Nous contacter
                                <i className="fas fa-chevron-right" />
                              </span>
                            </Link>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="manage-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/images/femme-souriante-plein-coup-bagages-jaunes.png")',
                  }}
                >
                  {/*<div className="counting-shape">
                    <img src="assets/img/counting.png" alt="shape-img" />
                </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< Service Counter Section Start >>*/}
      {/*<ServiceCounterSection />*/}

      {/*<< Team Section Start >>*/}
      <TeamSection />
      {/*<Marque />*/}
      <Testimonial4Slider />

      {/*<div className="brand-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <BrandSlider />
          </div>
        </div>
      </div>*/}

      {/*<NewsSection sectionClass="news-section-2" />*/}
    </Layout>
  );
};
export default page;
