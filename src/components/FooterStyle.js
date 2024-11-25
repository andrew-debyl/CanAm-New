import Link from "next/dist/client/link";
import Image from "next/image";
export const FooterStyle1 = () => (
  <footer className="footer-one">
    <div className="container">
      <div className="footer-one__top">
        <div
          className="footer-one__bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/footer-v1-bg.png)",
          }}
        />
        <div className="row">
          <div
            className="col-xl-2 col-lg-2 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__overview mar-top">
              <h3 className="footer-widget__title">Overview</h3>
              <ul className="footer-widget__overview-list list-unstyled">
                <li>
                  <Link href="/buying-or-selling">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Buying or Selling
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/technical-support">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Technical Support
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Contact Us
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Products</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/parts">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Parts
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/supplies">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Supplies
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/equipment">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Equipment
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Gallery
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Get in Touch</h3>
              <p className="footer-widget__newsletter-text">
                Enter your email below, and <br />
                we'll follow up with you soon:
              </p>
              <form
                className="footer-widget__newsletter-form"
                action="https://api.web3forms.com/submit" 
                method="POST"
              >
                <input type="hidden" name="access_key" value="8576f478-53ae-42cc-b97e-336489de47d7"></input>
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <input type="hidden" name="redirect" value="https://www.canamimaging.com/submit"></input>
                <div className="newsletter__button">
                  <button type="submit" className="footer-btn">
                    <span className="thm-btn">
                      Submit&nbsp;
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/" aria-label="Go to Home Page">
                  <div>
                    <Image
                      src="/assets/images/resources/logo-2.png"
                      alt="canam logo"
                      width={240}
                      height={68}
                    />
                  </div>
                </Link>
              </div>
              <div className="footer-contact-info">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-letter" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@canamimaging.com">
                        info@canamimaging.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="tel:18667580007">1-866-758-0007</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>Copyright © 2024 CanAm Imaging Products Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export const FooterStyle2 = () => (
  <footer className="footer-one footer-one--footer-two">
    <div
      className="footer-two__bg"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/footer-v2-bg.png)",
      }}
    ></div>
    <div className="container">
      <div className="footer-one__top">
        <div className="row">
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Overview</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/buying-or-selling">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Buying or Selling
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/technical-support">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Technical Support
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Contact Us
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp footer-adjust"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Products</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/parts">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Parts
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/supplies">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Supplies
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/equipment">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Equipment
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery">
                    <div>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Gallery
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Get in Touch</h3>
              <p className="footer-widget__newsletter-text">
                Enter your email below, and <br />
                we'll follow up with you soon:
              </p>
              <form
                action="https://api.web3forms.com/submit" method="POST"
                className="footer-widget__newsletter-form"
              >
                <input type="hidden" name="access_key" value="8576f478-53ae-42cc-b97e-336489de47d7"></input>
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    autoComplete="off"
                    required
                  />
                </div>
                <input type="hidden" name="redirect" value="https://www.canamimaging.com/submit"></input>
                <div className="newsletter__button">
                  <button type="submit" className="footer-btn">
                    <span className="thm-btn">
                      Submit&nbsp;
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/" aria-label="Go to Home Page">
                  <div className="footer-widget__about-logo-2">
                    <Image
                      src="/assets/images/resources/whitelogo.png"
                      alt="canam logo"
                      width={230}
                      height={65}
                    />
                  </div>
                </Link>
              </div>
              <div className="footer-contact-info">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-letter" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@canamimaging.com">
                        info@canamimaging.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="tel:18667580007">1-866-758-0007</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>Copyright © 2024 CanAm Imaging Products Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
