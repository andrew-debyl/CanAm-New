import Link from "next/dist/client/link";
import { Services, Products } from "./Menu";

export const Sticky1 = () => {
  return (
    <div className="stricky-header stricked-menu main-menu" id="header-sticky">
      <div className="sticky-header__content">
        <div className="main-menu__inner">
          <div className="left">
            <div className="logo-box1">
              <Link href="/" aria-label="Go to Home Page">
                <div>
                  <img src="/assets/images/resources/logo6.png" alt="image" />
                </div>
              </Link>
            </div>
          </div>
          <a href="#" className="mobile-nav__toggler">
            <i className="fa fa-bars" />
          </a>
          <div className="middle">
            <ul className="main-menu__list">
              <li>
                <Link href="/" aria-label="Go to Home Page">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li className="dropdown">
                <a href="#">Products</a>
                <ul>
                  <Products />
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Services</a>
                <ul>
                  <Services />
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
