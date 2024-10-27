import Link from "next/dist/client/link";
import dynamic from "next/dynamic";
import BrandSlider from "../src/components/slider/BrandSlider";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import Image from "next/image";
import Head from "next/head";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about CanAm Imaging, your trusted partner in superior print and copy solutions, with over 65 years of experience in exceptional customer service and high-quality pre-owned equipment."
        />
      </Head>
      <Layout footer={2}>
        <PageBanner pageName="About Us" />
        <section className="about-one about-one--about">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="about-one__left">
                  <div className="about-one--about__big-title">
                    <h2>About</h2>
                  </div>
                  <div className="shape1">
                    <img
                      src="assets/images/shapes/thm-shape-1.png"
                      alt="image"
                    />
                  </div>
                  <div className="about-one__left-img">
                    <Image
                      src="/assets/images/about/printer.png"
                      alt="image"
                      width={570}
                      height={630}
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
                    <div
                      className="about-one__video-gallery wow fadeInUp animated animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <Image
                        src="/assets/images/resources/banner4.jpg"
                        alt="image"
                        width={198}
                        height={216}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>About CanAm</h4>
                    </div>
                    <h2 className="section-title__title">
                      Your Partner in Superior Print and Copy Solutions
                    </h2>
                  </div>
                  <div className="about-one__right-inner">
                    <p className="about-one__right-text">
                      CanAm Imaging is committed to exceptional customer
                      service, offering more than just equipment with flexible
                      financing, guarantees, and comprehensive after-sales
                      support. With facilities in Rochester (NY) and Richmond
                      Hill (ON) we serve both North American and international
                      clients of Canon, Kodak, Konica Minolta, Ricoh, and Xerox.
                      Our 65 years of experience, engineering expertise, and
                      skilled reconditioning team ensure top-quality pre-owned
                      equipment and parts for high and mid-volume print and copy
                      businesses. We provide solutions for reselling, individual
                      units, or fleet installations, aiming to boost efficiency
                      and profitability. Selected reconditioned Xerox equipment
                      includes the Xerox Full Service Maintenance Agreement. Our
                      extensive network and expert technical support team are
                      available by phone or online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="counter-one counter-one--counter-three jarallax clearfix"
          data-jarallax
          data-speed="0.2"
          data-imgposition="50% 0%"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/aboutus-background.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="counter-one__wrapper clearfix">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="counter-one__single">
                        <div className="counter-one__single-icon">
                          <img
                            src="/assets/images/icon/counter-v3-icon1.png"
                            alt="image"
                          />
                        </div>
                        <div className="counter-one__outer">
                          <div className="counter-one__box">
                            <h2 className="counter-one__single-text">
                              <Counter end={1900} />
                              &nbsp;
                              <i className="fa fa-plus" aria-hidden="true" />
                            </h2>
                          </div>
                          <div className="counter-one__title">
                            <h6>Customers Served</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="counter-one__single">
                        <div className="counter-one__single-icon">
                          <img
                            src="/assets/images/icon/counter-v3-icon2.png"
                            alt="image"
                          />
                        </div>
                        <div className="counter-one__outer">
                          <div className="counter-one__box">
                            <h2 className="counter-one__single-text">
                              <Counter end={29} />
                              &nbsp;
                              <i className="fa fa-plus" aria-hidden="true" />
                            </h2>
                          </div>
                          <div className="counter-one__title">
                            <h6>Countries Sold To</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="counter-one__single">
                        <div className="counter-one__single-icon">
                          <img
                            src="/assets/images/icon/counter-v3-icon3.png"
                            alt="image"
                          />
                        </div>
                        <div className="counter-one__outer">
                          <div className="counter-one__box">
                            <h2 className="counter-one__single-text">
                              <Counter end={24} />
                              &nbsp;
                              <i className="fa fa-plus" aria-hidden="true" />
                            </h2>
                          </div>
                          <div className="counter-one__title">
                            <h6>Years in Business</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="counter-three__bottom">
                    <div className="counter-three__bottom-text">
                      <div className="section-title">
                        <div className="section-title__tagline">
                          <span className="left" />
                          <h4>Discover More</h4>
                        </div>
                        <h2 className="section-title__title">
                          We Are Committed to
                          <br />
                          Achieving Excellence Together
                        </h2>
                      </div>
                    </div>
                    <div className="counter-three__bottom-btn">
                      <Link href="/contact#section1">
                        <div className="thm-btn">
                          Talk to our Team&nbsp;
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-choose-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="why-choose-one__content">
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>Why CamAm</h4>
                    </div>
                    <h2 className="section-title__title">
                      {" "}
                      Excellence Service and Expertise
                    </h2>
                  </div>
                  <ul className="why-choose-one__list list-unstyled">
                    <li className="why-choose-one__list-single">
                      <div className="icon">
                        <i className="fa fa-check " aria-hidden="true" />
                      </div>
                      <div className="text">
                        <h3>Unmatched Customer Service</h3>
                        <p>
                          CanAm Imaging goes beyond just equipment, offering
                          flexible financing, guarantees, and comprehensive
                          after-sales support to ensure exceptional service.
                        </p>
                      </div>
                    </li>
                    <li className="why-choose-one__list-single">
                      <div className="icon">
                        <i className="fa fa-check" aria-hidden="true" />
                      </div>
                      <div className="text">
                        <h3>Expertise You Can Trust</h3>
                        <p>
                          With 65 years of industry experience, we provide
                          high-quality pre-owned equipment, backed by a skilled
                          reconditioning team and engineering excellence.
                        </p>
                      </div>
                    </li>
                    <li className="why-choose-one__list-single">
                      <div className="icon">
                        <i className="fa fa-check" aria-hidden="true" />
                      </div>
                      <div className="text">
                        <h3>Comprehensive Solutions</h3>
                        <p>
                          From reselling equipment to managing fleet
                          installations, we are solutions-driven, aiming to
                          enhance your efficiency and profitability with our
                          extensive service options.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-6 wow slideInRight"
                data-wow-delay="500ms"
                data-wow-duration="2500ms"
              >
                <div className="why-choose-one__img">
                  <Image
                    src="/assets/images/about/100_2221.jpg"
                    alt="image"
                    width={500}
                    height={640}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-one partner-one--about">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="partner-one__content">
                  <BrandSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
