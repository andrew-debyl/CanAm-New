import Link from "next/dist/client/link";
import Image from "next/image";
import { useState } from "react";
const MobileMenu = ({ isMobileOpen, addClassName }) => {
  const [isExpandedProducts, setIsExpandedProducts] = useState(false);
  const [isExpandedServices, setIsExpandedServices] = useState(false);

  const toggleMenuProducts = () => {
    setIsExpandedProducts((prevState) => !prevState);
  };

  const toggleMenuServices = () => {
    setIsExpandedServices((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    addClassName((prevState) => !prevState);
  };

  return (
    <div className={`mobile-nav__wrapper ${isMobileOpen ? "expanded" : ""}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={toggleMobileMenu}
      />
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={toggleMobileMenu}
        >
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <Link href="/" aria-label="Go to Home Page">
            <div aria-label="logo image">
              <Image
                src="/assets/images/resources/whitelogo.png"
                width={155}
                height={44}
                alt="canam logo"
              />
            </div>
          </Link>
        </div>
        <div className="dropdown current">
          <ul className="main-menu__list">
            <li className="current">
              <a href="/" aria-label="Go to Home Page" onClick={toggleMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={toggleMobileMenu}>
                About
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="mobile-menu--noclick">
                Products
                <button
                  aria-label="dropdown toggler"
                  onClick={toggleMenuProducts}
                  className={`${isExpandedProducts ? "expanded" : ""}`}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </a>
              <ul style={{ display: isExpandedProducts ? "block" : "none" }}>
                <li>
                  <a href="/parts" onClick={toggleMobileMenu}>
                    Parts
                  </a>
                </li>
                <li>
                  <a href="/supplies" onClick={toggleMobileMenu}>
                    Supplies
                  </a>
                </li>
                <li>
                  <a href="/equipment" onClick={toggleMobileMenu}>
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="/gallery" onClick={toggleMobileMenu}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/videos" onClick={toggleMobileMenu}>
                    Videos
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="mobile-menu--noclick">
                Services
                <button
                  aria-label="dropdown toggler"
                  onClick={toggleMenuServices}
                  className={`${isExpandedServices ? "expanded" : ""}`}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </a>
              <ul style={{ display: isExpandedServices ? "block" : "none" }}>
                <li>
                  <a href="/buying-or-selling" onClick={toggleMobileMenu}>
                    Buying or Selling
                  </a>
                </li>
                <li>
                  <a href="/technical-support" onClick={toggleMobileMenu}>
                    Technical Support
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact" onClick={toggleMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-nav__container" />
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="icon-phone-call" />
            <a href="mailto:info@canamimaging.com">info@canamimaging.com</a>
          </li>
          <li>
            <i className="icon-letter" />
            <a href="tel:18667580007">1-866-758-0007</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
