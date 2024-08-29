import Link from "next/dist/client/link";
import { News, Pages, Services, Products } from "./Menu";

export const Sticky1 = () => {
  return (
    <div className="stricky-header stricked-menu main-menu" id="header-sticky">
      <div className="sticky-header__content">
        <div className="main-menu__inner">
          <div className="left">
            <div className="logo-box1">
              <div
                className="logo-box1_bg"
                style={{
                  backgroundImage:
                    "url(assets/images/pattern/logo-box1-bg.png)",
                }}
              ></div>
              <Link href="/">
                <a>
                  <img src="assets/images/resources/logo6.png" alt="image" />
                </a>
              </Link>
            </div>
          </div>
          <a href="#" className="mobile-nav__toggler">
            <i className="fa fa-bars" />
          </a>
          <div className="middle">
            <ul className="main-menu__list">
              <li>
                <Link href="/">Home</Link>
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
              <li className="dropdown">
                <a href="#">Pages</a>
                <ul>
                  <Pages />
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">News</a>
                <ul>
                  <News />
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
