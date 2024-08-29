import Link from "next/dist/client/link";
export const FooterStyle1 = () => (
  <footer className="footer-one">
    <div className="container">
      <div className="footer-one__top">
        <div
          className="footer-one__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/footer-v1-bg.png)",
          }}
        />
        <div className="row">
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-2 col-lg-2 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__overview mar-top">
              <h3 className="footer-widget__title">Overview</h3>
              <ul className="footer-widget__overview-list list-unstyled">
                <li>
                  <Link href="/">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Resources
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Products/Services</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/equipment">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Equipment
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/parts">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Parts
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/supplies">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Supplies
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/technical-support">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Technical Support
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/buying-or-selling">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Buying/Selling
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
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
                onSubmit={(e) => e.preventDefault()}
                className="footer-widget__newsletter-form"
              >
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    autoComplete="off"
                  />
                </div>
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
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/">
                  <a>
                    <img src="assets/images/resources/logo.png" alt="image" />
                  </a>
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
          {/*End Footer Widget Column*/}
        </div>
      </div>
      {/*Start Footer One Bottom*/}
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
      {/*End Footer One Bottom*/}
    </div>
  </footer>
);

export const FooterStyle2 = () => (
  <footer className="footer-one footer-one--footer-two">
    <div
      className="footer-two__bg"
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer-v2-bg.png)",
      }}
    ></div>
    <div className="container">
      <div className="footer-one__top">
        <div className="row">
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Overview</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/resources">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Resources
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp footer-adjust"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Products/Services</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/equipment">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Equipment
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/parts">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Parts
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/supplies">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Supplies
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/technical-support">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Technical Support
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/buying-or-selling">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Buying/Selling
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Get in Touch</h3>
              <p className="footer-widget__newsletter-text">
              Enter your email below, and <br/>
              we'll follow up with you soon:
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="footer-widget__newsletter-form"
              >
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    autoComplete="off"
                  />
                </div>
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
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/">
                  <a className="footer-widget__about-logo-2">
                    <img
                      src="assets/images/resources/logo.png"
                      alt="image"
                    />
                  </a>
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
          {/*End Footer Widget Column*/}
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>
                Copyright © 2024 CanAm Imaging Products Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </div>
  </footer>
);