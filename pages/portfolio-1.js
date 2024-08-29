import Link from "next/dist/client/link";
import { useEffect } from "react";
import BrandSlider from "../src/components/slider/BrandSlider";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import { dataFilter } from "../src/utils";

const Portfolio = () => {
  useEffect(() => {
    dataFilter();
  }, []);
  return (
    <Layout footer={2}>
      <PageBanner pageName="Portfolio Grid" />
{/*Start case-studies-one Top
      <section className="case-studies-one case-studies-one--portfolio-grid">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Case Studies</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We’re Committed to Creating
              <br /> Change That Matters
            </h2>
          </div>
          <div className="row">
            
            <div className="case-studies-one--portfolio-grid__top">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="case-studies-one--portfolio-grid__menu-box">
                  <ul className="project-filter clearfix post-filter has-dynamic-filters-counter list-unstyled">
                    <li
                      data-filter=".filter-item"
                      className="active filter-item"
                    >
                      <span className="filter-text">Show All</span>
                    </li>
                    <li className="filter-item" data-filter=".business">
                      <span className="filter-text">Business</span>
                    </li>
                    <li className="filter-item" data-filter=".finance">
                      <span className="filter-text">Finance </span>
                    </li>
                    <li className="filter-item" data-filter=".marketing">
                      <span className="filter-text">Marketing</span>
                    </li>
                    <li className="filter-item" data-filter=".banking">
                      <span className="filter-text">Banking</span>
                    </li>
                    <li className="filter-item" data-filter=".development">
                      <span className="filter-text">Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          <div className="row filter-layout masonary-layout">
            
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item development finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img5.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>Marketing Planning</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item business development banking">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img6.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a> Program Management</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img7.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>IT Management</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img8.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>Growth Business</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img9.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>Co - Working Space</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img10.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>IT Management</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <section className="partner-one partner-one--services">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Trusted Partners</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Trending Business Consulting
              <br />
              Article &amp; Tips
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
      <section className="team-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Consultants</h4>
            </div>
            <h2 className="section-title__title">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="team-one__content-wrapper">
                <div className="team-one__big-title">
                  <h2>Team</h2>
                </div>
                <div className="row">
                  
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-1.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>CEO &amp; Founder</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>CEO &amp; Founder</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-2.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Seymour Pounders</a>
                            </Link>
                          </h4>
                          <p>Senior Manager</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Seymour Pounders</a>
                            </Link>
                          </h4>
                          <p>Senior Manager</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-3.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Junior Marketing</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Junior Marketing</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-4.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              Douglas B. Robinson
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              Douglas B. Robinson
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-5.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Delmer H. Harrison</Link>
                          </h4>
                          <p>Senior Consultant</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Delmer H. Harrison</Link>
                          </h4>
                          <p>Senior Consultant</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-6.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Michael R. Spencer</Link>
                          </h4>
                          <p>Senior Manager</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Michael R. Spencer</Link>
                          </h4>
                          <p>Senior Manager</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-7.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Matthew B. Thomas</Link>
                          </h4>
                          <p>Junior Marketing</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Matthew B. Thomas</Link>
                          </h4>
                          <p>Junior Marketing</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-8.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Gary R. Anderson</Link>
                          </h4>
                          <p>Managing Director</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Gary R. Anderson</Link>
                          </h4>
                          <p>Managing Director</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <Link href="/team-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="team-one__button team-one__button-team">
                    <a href="#" className="thm-btn">
                      View All Member{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </Layout>
  );
};

export default Portfolio;
