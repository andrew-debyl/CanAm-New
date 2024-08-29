import Link from "next/dist/client/link";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";

const News = () => {
  return (
    <Layout footer={2}>
      <PageBanner pageName="Blog Gird" />
      <section className="blog-one">
        <div className="container">
          <div className="row">
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img1.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Evolving Program Manage
                        <br />
                        Office For Modern
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img2.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Design Decision With Bea
                        <br />
                        Feitler Unstoppable{" "}
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img3.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Pain-Free Workflow Issue
                        <br />
                        Reporting Resolution
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img4.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Data Onboarding Chall
                        <br />
                        For Software Products
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img5.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        We Google Analytics Helps
                        <br />
                        Developers Design
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img6.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Information And Inform
                        <br />
                        Architecture Picture
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img7.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Designers Can Help Restaur <br />
                        Move Into Experiences
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img8.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Right Kind Research Study
                        <br />
                        With Diamond Model
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img9.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <div>
                        <span className="icon-plus" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <div>
                        Pain-Free Workflow Issue
                        <br />
                        Reporting Resolution
                      </div>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
