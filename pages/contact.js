import { useState } from "react";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const News = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  const handleMarkerClick = () => {
    setInfoWindowVisible(true);
  };

  return (
    <Layout footer={2}>
      <PageBanner pageName="Contact Us" />
      {/*Contact Box Start*/}
      <section className="contact-box">
        <div className="container">
          <div className="row">
            {/*Start Contact Box Single*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <div className="contact-box__single text-center">
                <div className="contact-box__single-icon">
                  <span className="icon-pin" />
                </div>
                <div className="contact-box__single-text">
                  <h2>
                    <a href="#">Our Location</a>
                  </h2>
                  <p>
                    <b>United States:</b> <br />
                    50 Greenleaf Street <br />
                    Rochester, New York 14609
                  </p>
                  <p className="contact-alining">
                    <b>Canada:</b> <br />
                    7321 Victoria Park Ave Unit 3<br />
                    Markham, Ontario L3R 2Z8
                  </p>
                </div>
              </div>
            </div>
            {/*End Contact Box Single*/}
            {/*Start Contact Box Single*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1500ms"
            >
              <div className="contact-box__single style2 text-center">
                <div className="contact-box__single-icon">
                  <span className="icon-letter" />
                </div>
                <div className="contact-box__single-text">
                  <h2>
                    <a href="#">Email Address</a>
                  </h2>
                  <p>
                    <b>General Contact:</b> <br />
                    <a href="mailto:info@canamimaging.com">
                      info@canamimaging.com
                    </a>
                  </p>
                  <p>
                    <b>Equipment:</b> <br />
                    <a href="mailto:equipment@canamimaging.com">
                      equipment@canamimaging.com
                    </a>
                  </p>
                  <p>
                    <b>Technical Support:</b> <br />
                    <a href="mailto:tech@canamimaging.com">
                      tech@canamimaging.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/*End Contact Box Single*/}
            {/*Start Contact Box Single*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="1500ms"
            >
              <div className="contact-box__single style3 text-center">
                <div className="contact-box__single-icon">
                  <span className="icon-phone-call" />
                </div>
                <div className="contact-box__single-text">
                  <h2>
                    <a href="#">Phone Number</a>
                  </h2>
                  <p>
                    <b>United States:</b> <br />
                    <a href="tel:5852244033">(585) 224-4033</a>
                  </p>
                  <p>
                    <b>Canada:</b> <br />
                    <a href="tel:9057701118">(905) 770-1118</a>
                  </p>
                  <p>
                    <b>Toll Free:</b> <br />
                    <a href="tel:18667580007">1-866-758-0007</a>
                  </p>
                </div>
              </div>
            </div>
            {/*End Contact Box Single*/}
          </div>
        </div>
      </section>
      {/*Contact Box End*/}
      <section className="contact-page-google-map">
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: "100vw", height: "80vh" }}
            defaultCenter={{ lat: 43.82062438363314, lng: -79.34332072780913 }}
            defaultZoom={14}
            className="contact-page-google-map__one"
            disableDefaultUI={false}
            scrollwheel={false}
            mapId={"101a131bdd4aaac2"}
          >
            <AdvancedMarker
              onClick={handleMarkerClick}
              position={{ lat: 43.82062438363314, lng: -79.34332072780913 }}
            />
            {infoWindowVisible && (
              <InfoWindow
                position={{ lat: 43.82062438363314, lng: -79.34332072780913 }}
                onCloseClick={() => setInfoWindowVisible(false)}
              >
                <div>
                  <h5>CanAm Imaging</h5>
                  <br />
                  <p>
                    7321 Victoria Park Ave Unit 3<br />
                    Markham, Ontario L3R 2Z8
                  </p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </section>
      {/*Contact Page Google Map End*/}
      {/*Contact page Start*/}
      <section id="section1" className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div
                className="contact-page__inner wow slideInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="section-title text-center">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Send Us A Message</h4>
                    <span className="right" />
                  </div>
                  <h2 className="section-title__title">
                    Get in Touch for <br />
                    Professional Support
                  </h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-page__form contact-form-validated"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          placeholder="Phone number"
                          name="phone"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="email"
                          placeholder="Company"
                          name="Company"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <textarea
                          name="message"
                          placeholder="Write message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="contact-page__btn">
                        <button type="submit">
                          <span className="thm-btn">Send It Our Way</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
