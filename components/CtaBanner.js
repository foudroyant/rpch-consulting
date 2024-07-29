import Link from "next/link";

const CtaBanner = ({ textColor = "text-white" }) => {
  return (
    <section
      className="cta-banner-section bg-cover section-padding"
      style={{ backgroundImage: 'url("assets/img/banner/01.jpg")' }}
    >
      <div className="container">
        <div className="cta-banner-wrapper section-padding pt-0">
          <div className="section-title mb-0">
            <span className={`${textColor} wow fadeInUp`}>
            Support Complet pour Vos Séjours
            </span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Réservez votre hôtel<br />
              Contactez :{" "}
              <a href="tel:+33 6 37 08 48 76" className={textColor}>
                (+33) 6 37 08 48 76
              </a>
            </h2>
          </div>
          <Link
            href="contact"
            className="theme-btn hover-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Contactez-nous
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
