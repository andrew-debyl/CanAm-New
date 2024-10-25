import Link from "next/dist/client/link";
import { Contact, Services, Products } from "./Menu";
import Image from 'next/image';

export const HeaderStyle1 = ({ addClassName }) => {
  return (
    <header className="main-header clearfix">
      <div className="main-header-one__bottom">
        <div className="auto-container">
          <div className="main-header-one__bottom-inner clearfix">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="left">
                  <div className="logo-box1">
                    <Link href="/">
                      <div>
                        <Image src="/assets/images/resources/logo6.png" alt="" width={230} height={65} />
                      </div>
                    </Link>
                  </div>
                </div>
                <a
                  href="#"
                  className="mobile-nav__toggler"
                  onClick={() => addClassName((prevState) => !prevState)}
                >
                  <i className="fa fa-bars"></i>
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
                    <Contact />
                  </ul>
                </div>
                <div className="right">
                  <div className="main-menu__right">
                    <div className="phone_number">
                      <div className="icon">
                        <span className="icon-agenda"></span>
                      </div>
                      <div className="number">
                        <p>Contact Us</p>
                        <a href="tel:18667580007">1-866-758-0007</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export const DefaultHeaderStyle = ({ addClassName }) => {
  return (
    <header className="main-header main-header--three  clearfix">
      <div className="main-header-three__bottom main-header-four__bottom">
        <div className="auto-container">
          <div className="main-header-three__bottom-inner main-header-four__bottom-inner clearfix">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="left">
                  <div className="logo-box3 logo-box3--style2">
                    <Link href="/">
                      <div>
                        <Image
                          src="/assets/images/resources/logo6.png"
                          alt="image"
                          width={212}
                          height={60}
                        />
                      </div>
                    </Link>
                  </div>
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => addClassName((prevState) => !prevState)}
                  >
                    <i className="fa fa-bars" />
                  </a>
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
                    <Contact />
                  </ul>
                </div>
                <div className="main-header-four__bottom_right">
                  <div className="main-menu__right">
                    <div className="btn-box">
                      <a
                        className="thm-btn default-header--btn"
                        href="tel:18667580007"
                      >
                        1-866-758-0007
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
