"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class Testimonial4Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonial-section-4 fix section-padding">
        <div className="client-1">
          <img src="assets/img/testimonial/08.png" alt="img" />
        </div>
        <div className="client-2">
          <img src="assets/img/testimonial/09.png" alt="img" />
        </div>
        <div className="container">
          <Slider
            ref={(c) => (this.slider = c)}
            {...sliderProps.testimonialCarouselActive4}
            className="testimonial-carousel-active-4"
          >
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/images/etudiante.jpeg")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Laura D</h5>
                      <h6>
                      Assistance aux démarches de <span>visa étudiant</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ Grâce à RPCH-Consulting, j'ai obtenu mon visa étudiant sans tracas. Leur expertise et leur soutien m'ont permis de me concentrer sur mes études en France. Je recommande vivement leurs services ! “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/images/etudiante.jpeg")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Marc L</h5>
                      <h6>
                      Service de location de <span>voitures </span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ J'ai loué une voiture avec RPCH-Consulting pour un road trip en famille. Le service était impeccable, les tarifs très compétitifs et la flexibilité de retour était un vrai plus. Merci pour cette expérience sans souci ! “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/images/etudiante.jpeg")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Sophie T</h5>
                      <h6>
                      Assistance aux  <span>formalités de voyage</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ RPCH-Consulting m'a aidé à obtenir tous les documents nécessaires pour mon voyage d'affaires. Leur efficacité et leur connaissance des formalités m'ont vraiment impressionné. Je referai appel à eux sans hésiter. “
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-wrapper-4">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="testimonial-items">
                    <div
                      className="testimonial-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/images/etudiante.jpeg")',
                      }}
                    />
                    <div className="client-info">
                      <h5>Jean-Michel P</h5>
                      <h6>
                      Support complet pour <span> vos séjours</span>
                      </h6>
                    </div>
                    <div className="testimonial-content">
                      <h3>
                        “ J'ai réservé mon hôtel en France avec RPCH-Consulting et j'ai été très satisfait du service. Ils ont trouvé un hébergement confortable à un prix raisonnable et m'ont même aidé avec des conseils de voyage. Je recommande fortement !“
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="slider-button">
          <div className="testimonial-nav-prev" onClick={this.previous}>
            <i className="fas fa-chevron-left" />
          </div>
          <div className="testimonial-nav-next" onClick={this.next}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </section>
    );
  }
}
