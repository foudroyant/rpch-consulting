"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "Large Sélection de Véhicules",
      icon: "flaticon-coding",
      desc: "",
    },
    {
      id : 2,
      title : "Tarifs Compétitifs",
      icon : "",
      desc : "Nos partenariats avec des fournisseurs nous permettent d'offrir des tarifs compétitifs, des réductions exclusives et des forfaits avantageux pour optimiser votre budget de voyage."
    },
    {
      id : 3,
      title : "Flexibilité et Commodité",
      icon : "",
      desc : "Nous offrons des options de location flexibles à court et à long terme, avec la possibilité de récupérer et rendre le véhicule à différents endroits pour plus de commodité."
    },
    {
      id :4,
      title : "Service Client Personnalisé",
      icon : "",
      desc : "Notre équipe dédiée vous aide à chaque étape, de la réservation à la restitution, en vous fournissant des conseils personnalisés pour choisir le véhicule adapté à vos besoins et à votre budget."
    },
    {
      id : 5,
      title : "Véhicules Bien Entretenus",
      icon : "",
      desc : "La sécurité et le confort de nos clients sont prioritaires. Nos véhicules sont régulièrement entretenus et inspectés pour assurer une expérience de conduite sûre et agréable."
    }
  ];
  return (
    <section
      className="service-section fix section-padding section-bg"
      id="service"
    >
      <div className="shape-image">
        <img src="assets/img/service/shape.png" alt="shape-img" />
      </div>
      <div className="bottom-shape">
        <img src="assets/img/service/bottom-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="title-section-area">
          <div className="section-title">
            <span className="wow fadeInUp">Location de voitures</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Les plus expérimentés <br />
              Nos services
            </h2>
          </div>
          <Link
            href="service-details"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Découvrez notre service
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
      <div className="service-wrapper">
        <Slider
          {...sliderProps.serviceCarouselActive}
          className="service-carousel-active"
        >
          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>01</h4>
                  <h3>
                    <Link href="service-details">Large Sélection de Véhicules</Link>
                  </h3>
                  <p>
                  Nous offrons une large sélection de véhicules, des voitures économiques aux voitures de luxe, ainsi que des SUV et des véhicules utilitaires, pour répondre à tous vos besoins. <br />
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/images/voiture.jpeg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>02</h4>
                  <h3>
                    <Link href="service-details">Tarifs Compétitifs</Link>
                  </h3>
                  <p>
                  Nos partenariats avec des fournisseurs nous permettent d'offrir des tarifs compétitifs, des réductions exclusives et des forfaits avantageux pour optimiser votre budget de voyage. <br />
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/images/voiture.jpeg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>03</h4>
                  <h3>
                    <Link href="service-details">Flexibilité et Commodité</Link>
                  </h3>
                  <p>
                  Nous offrons des options de location flexibles à court et à long terme, avec la possibilité de récupérer et rendre le véhicule à différents endroits pour plus de commodité.<br />
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/images/voiture.jpeg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>04</h4>
                  <h3>
                    <Link href="service-details">Service Client Personnalisé</Link>
                  </h3>
                  <p>
                  Notre équipe dédiée vous aide à chaque étape, de la réservation à la restitution, en vous fournissant des conseils personnalisés pour choisir le véhicule adapté à vos besoins et à votre budget.<br />
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/images/voiture.jpeg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="service-card-items">
              <div className="service-content">
                <div className="icon">
                  <i className="flaticon-blueprint" />
                </div>
                <div className="content">
                  <h4>05</h4>
                  <h3>
                    <Link href="service-details">Véhicules Bien Entretenus</Link>
                  </h3>
                  <p>
                  La sécurité et le confort de nos clients sont prioritaires. Nos véhicules sont régulièrement entretenus et inspectés pour assurer une expérience de conduite sûre et agréable.<br />
                  </p>
                </div>
              </div>
              <div
                className="service-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/images/voiture.jpeg")',
                }}
              >
                <Link href="service-details" className="arrow-icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default ServiceSection;

export const ServiceSection2 = ({ showItem = 100 }) => {
  const services = [
    {
      id: 1,
      title: "Assistance aux Démarches de Visa Étudiant",
      icon: "mortarboard.png",
      desc: "Vous rêvez d'étudier en France ? RPCH Consulting est votre partenaire de confiance pour vous guider à chaque étape de votre demande de visa étudiant.",
    },
    {
      id : 2,
      title : "Service de Location de Voitures",
      icon : "car.png",
      desc : "Voyagez en toute liberté avec RPCH Consulting ! Notre service de location de voitures propose une large gamme de véhicules adaptés à tous vos besoins."
    },
    {
      id : 3,
      title : "Assistance aux Formalités de Voyage",
      icon : "travel.png",
      desc : "Préparez votre voyage en toute sérénité avec RPCH Consulting. Nous vous accompagnons dans toutes vos démarches administratives, de la demande de visa à l'obtention ou le renouvellement de votre passeport."
    },
    {
      id : 3,
      title : "Support Complet pour Vos Séjours",
      icon : "apartment.png",
      desc : "Faites de votre séjour une réussite avec RPCH Consulting. Nous proposons un service de réservation d'hôtels qui couvre une large gamme d'options, des hébergements luxueux aux solutions économiques. "
    },
  ];
  return (
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">Nos services</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
        Voyagez l'esprit tranquille. <br />
        Nous gérons vos démarches.
        </h2>
      </div>
      <div className="row">
        {services.map(
          (service, index) =>
            index < showItem && (
              <div
                key={service.id}
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items">
                  <img src={"assets/images/"+service.icon} width="50" height="50" />
                  <div className="content">
                    <h3>
                      <Link href="service">{service.title}</Link>
                    </h3>
                    <p>{service.desc}</p>
                    <Link href="service" className="arrow-icon">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
