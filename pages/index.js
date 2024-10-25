import Link from "next/dist/client/link";
import BrandSlider from "../src/components/slider/BrandSlider";
import Layout from "../src/components/Layout";
import Image from "next/image";

const Index = () => {
  return (
    <Layout header={1} footer={1} featuresContentOff>
      <section className="banner-one clearfix">
        <div
          className="shape1 wow slideInRight"
          data-wow-delay="500ms"
          data-wow-duration="3500ms"
        >
          <img src="assets/images/shapes/banner-shape-1.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner-one__inner-box">
                <h2 className="banner-one__big-title">canam</h2>
                <div className="banner-one__content">
                  <div className="section-title">
                    <div className="section-title__tagline custom-animation-down">
                      <span className="left" />
                      <h4>Premium Print & Copy Services</h4>
                    </div>
                    <h2 className="section-title__title  custom-animation-down">
                      Expertise Built on 30 Years of Experience
                    </h2>
                  </div>
                  <div className="banner-one__btn custom-animation-down">
                    <Link href="/about">
                      <div className="thm-btn">
                        Find Out More&nbsp;
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="banner-one__banner-img custom-animation-right">
                  <Image
                    src="/assets/images/backgrounds/back4.png"
                    alt="image"
                    width={2210}
                    height={1222}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-one clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single wow fadeInLeft animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <Image
                      src="/assets/images/icon/customer-service.png"
                      alt="image"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <p className="home-page--features">
                        Dedicated to Delivering
                        <br />
                        Exceptional Customer Care
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single wow fadeInRight animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <Image
                      src="/assets/images/icon/support.png"
                      alt="image"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <p className="home-page--features">
                        Empowering Efficiency with
                        <br />
                        Expert Solutions and Support
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="about-one__left">
                <div className="shape1">
                  <img src="assets/images/shapes/thm-shape-1.png" alt="image" />
                </div>
                <div className="about-one__left-img">
                  <Image
                    className="homepage-logo"
                    src="/assets/images/resources/largecopier.jpg"
                    alt="image"
                    width={373}
                    height={472}
                  />
                </div>
                <div className="about-one__left-bottom">
                  <div className="about-one__logo">
                    <Image
                      src="/assets/images/resources/logo-2.png"
                      alt="image"
                      width={240}
                      height={68}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="about-one__right">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>CanAm Imaging</h4>
                  </div>
                  <h1>
                    Production and Mid-Volume Printing Equipment, Parts, and
                    Supplies
                  </h1>
                </div>
                <div className="home-page__right-inner">
                  <p style={{ fontSize: "18px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Extensive Inventory
                    </span>{" "}
                    – Our Financial Strength allows us to
                  </p>
                  <ul style={{ fontSize: "18px" }} className="home-page-list">
                    <li>
                      Maintain an extensive inventory of Fully-Reconditioned
                      Xerox and Other Manufacturers’ Equipment
                    </li>
                    <li>
                      Provide 100% Genuine Xerox Parts to the Self-Service and
                      I.S.O. Marketplace{" "}
                    </li>
                    <li>
                      Carry a Wide Range of Supplies from Various Manufacturers{" "}
                    </li>
                    <li>
                      Provide quality Canon, Kodak, Konica Minolta, Ricoh and
                      Xerox Equipment for our Export Customers Worldwide
                    </li>
                  </ul>
                  <p style={{ fontSize: "18px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Competitive Prices
                    </span>{" "}
                    – Let us give you a quote – you will not be disappointed!
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Professional Advice
                    </span>{" "}
                    - Our Team of Sales Professionals, Analysts and
                    Xerox-trained Technicians will ensure that you make the
                    Right Choice for your Printing Needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="features-three features-three--about"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/features-three--about-bg.png)",
        }}
      >
        <div className="features-three__content-box">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline">
                <span className="left" />
                <h4>Services We Provide</h4>
                <span className="right" />
              </div>
              <h2 className="section-title__title">
                Explore Our Extensive Range of Parts, Equipment, and Supplies
              </h2>
            </div>
            <div className="row homepage-products-wrapper">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <Link href="/parts">
                  <div className="features-three__single text-center">
                    <h4 className="features-three__single-title">Parts</h4>
                    <p className="features-three__single-text">
                      Discover quality parts to keep your equipment running
                      efficiently and reliably
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <Link href="/supplies">
                  <div className="features-three__single text-center">
                    <h4 className="features-three__single-title">Supplies</h4>
                    <p className="features-three__single-text">
                      Find essential supplies to support your printing and
                      operational needs
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <Link href="/equipment">
                  <div className="features-three__single text-center">
                    <h4 className="features-three__single-title">Equipment</h4>
                    <p className="features-three__single-text">
                      Explore our range of equipment designed to meet the
                      demands of any business
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <Link href="/gallery">
                  <div className="features-three__single text-center">
                    <h4 className="features-three__single-title">Gallery</h4>
                    <p className="features-three__single-text">
                      View our gallery for product images and examples of how
                      our solutions enhance your workflow
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partner-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Trusted Partners</h4>
            </div>
            <h2 className="section-title__title">
              Trusted Manufacturers
              <br />
              We Partner With
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="partner-one__content">
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Index;
