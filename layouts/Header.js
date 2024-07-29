"use client";
import DalTechSelect from "@/components/DalTechSelect";
import { daltechutility } from "@/utility";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { height } from "dom-helpers";


const Header = ({ header, single }) => {
  useEffect(() => {
    daltechutility.stickyNav();
  }, []);

  return <Header4 single={single} />;
};

export default Header;

const Nav = ({ single, menu }) => {
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "A propos" },
        { id: 2, href: "service", title: "Services" },
        //{ id: 3, href: "team", title: "Team" },
        //{ id: 4, href: "blog", title: "Blog" },
        { id: 5, href: "contact", title: "Contact" },
      ];
  return (
    <Fragment>
      {single ? (
        <ul>
          {/*<li className="has-dropdown active menu-thumb">
            <Link href="/">
              Accueil
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-home-menu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 home-menu">
                    <div className="home-menu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link href="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="home-menu-content text-center">
                      <h4 className="home-menu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
      </li>*/}
          <li>
            <Link href="/">Accueil</Link>
          </li>
          {singleMenu.map((menu) => (
            <li key={menu.id}>
              <a href={`${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          
          <li className="has-dropdown active d-lg-none">
            <Link href="team" className="border-none">
              Accueil
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="/">Home 01</Link>
              </li>
              <li>
                <Link href="index-2">Home 02</Link>
              </li>
              <li>
                <Link href="index-3">Home 03</Link>
              </li>
              <li>
                <Link href="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="service">
              Services <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="service">Services</Link>
              </li>
              <li>
                <Link href="service-details">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="news">
              Pages
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li className="has-dropdown">
                <Link href="project">
                  Projects
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="project">Projects One</Link>
                  </li>
                  <li>
                    <Link href="project-2">Projects Two</Link>
                  </li>
                  <li>
                    <Link href="project-details">Project Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link href="team">
                  Team
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="faq">Faq's</Link>
              </li>
              <li>
                <Link href="404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="news">
              Blog
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link href="news">Blog</Link>
              </li>
              <li>
                <Link href="news-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "about", title: "About" },
        { id: 2, href: "service", title: "Services" },
        { id: 3, href: "team", title: "Team" },
        { id: 4, href: "blog", title: "Blog" },
        { id: 5, href: "contact", title: "Contacts" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link href="about">A propos</Link>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Services")}>
                    Services <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={activeLi("Services")}>
                    <li>
                      <Link href="service">Services 1</Link>
                    </li>
                    <li>
                      <Link href="service-details">Service 2</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Services")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="mean-last">
                  <Link href="contact">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Search = ({ seachToggle, setSeachToggle }) => {
  return (
    <div
      className="search-wrap"
      style={{ display: seachToggle ? "block" : "none" }}
    >
      <div className="search-inner">
        <i
          className="fas fa-times search-close"
          onClick={() => setSeachToggle(false)}
          id="search-close"
        />
        <div className="search-cell">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSeachToggle(false);
            }}
          >
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const SearchBtn = ({ setSeachToggle }) => {
  return (
    <a
      href="#0"
      className="search-trigger search-icon"
      onClick={() => setSeachToggle(true)}
    >
      <i className="fal fa-search" />
    </a>
  );
};

const Offcanvas = ({
  open,
  close,
  logo = "assets/images/logo.png",
  style = "",
  single,
  menu,
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className={`fix-area `}>
        <div
          className={`offcanvas__info ${style} ${open ? "info-open" : ""}`}
          ref={domNode}
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src={logo} width="75" height="50" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => close(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="d-none d-lg-block">
              Chez RPCH Consulting, nous simplifions ces
              procédures pour vous, en vous o􀄁rant une assistance complète
              et personnalisée pour les démarches de visa étu
              diant, y compris l'a􀄌estation de virement irrévocable et
              l'hébergement partout en France
              </p>
              <MobileMenu single={single} menu={menu} />

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Brazzaville & Pointe Noire
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@azent.com">
                          contact@rpch-consulting.fr
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Lun-Ven, 09H - 17H
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+33 6 37 08 48 76">+33 6 37 08 48 76</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    <span>
                      Contactez-nous
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${open ? "overlay-open" : ""}`} />
    </Fragment>
  );
};



const Header4 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "A propos" },
    { id: 2, href: "service", title: "Services" },
    //{ id: 3, href: "team", title: "L'équipe" },
    //{ id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <Offcanvas
        single={single}
        open={sidebarToggle}
        close={setSidebarToggle}
        menu={singleMenu}
      />
      {/* Header Top Start */}
      {/* Header Area Start */}
      <header className="header-section-4">
        {/*<div className="top-header-2">
          <div className="container-fluid">
            <div className="top-header-items">
              <ul className="contact-list">
                <li>
                  <i className="far fa-map-marker-alt" /> 55 Main Street,2nd
                  block, New York
                </li>
                <li>
                  <i className="far fa-envelope" />
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                </li>
              </ul>
              <div className="header-right">
                <ul className="contact-list">
                  <li>
                    <i className="fal fa-clock" />
                    Mod-friday, 09am -05pm
                  </li>
                </ul>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  </div>*/}
        <div id="header-sticky" className="header-4">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo-1">
                      <img
                        src="assets/images/logo.png" width="150" height="100"
                        alt="logo-img"
                      />
                    </Link>
                    <Link href="/" className="header-logo-2">
                      <img src="assets/images/logo.png" width="200" height="100" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <Nav single={single} menu={singleMenu} />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="contact-info-items">
                    <div className="icon">
                      <i className="far fa-phone-volume" />
                    </div>
                    <div className="content">
                      <p>Urgent Call</p>
                      <h6>
                        <a href="tel:+29635870088">+296 358 700 88</a>
                      </h6>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link href="contact" className="theme-btn">
                      <span>Contacts</span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <i className="far fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Search Area Start */}
      <Search />
    </Fragment>
  );
};

