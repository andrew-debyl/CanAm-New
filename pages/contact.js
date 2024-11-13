import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import Head from "next/head";

const Contact = () => {
  //CHANGE TO ACTUALR URL
  //ALSO CHANGE DOWN BELOW FOR FORM SUBMISSIONS
  function addContactJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Contact Us",
        description:
          "Get in touch with CanAm Imaging for professional support. Contact us via phone, email, or through the form below for all your imaging equipment needs.",
        url: "https://can-am-new.vercel.app/contact",
        mainEntity: {
          "@type": "Organization",
          name: "CanAm Imaging",
          url: "https://can-am-new.vercel.app/",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "Customer Service",
            areaServed: "Worldwide",
            availableLanguage: "English",
          },
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://can-am-new.vercel.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact Us",
              item: "https://can-am-new.vercel.app/contact",
            },
          ],
        },
        potentialAction: {
          "@type": "Action",
          name: "Contact Us",
          target: "https://can-am-new.vercel.app/contact",
        },
      }),
    };
  }

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with CanAm Imaging for professional support. Contact us via phone, email, or through the form below for all your imaging equipment needs."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addContactJsonLd()}
          key="contact-jsonld"
        />
      </Head>
      <Layout footer={2}>
        <PageBanner pageName="Contact Us" />
        <section className="contact-box">
          <div className="container">
            <div className="row">
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
                      <div>Our Location</div>
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
                      <div>Email Address</div>
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
                      <div>Phone Number</div>
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
            </div>
          </div>
        </section>
        <section className="contact-page-google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.6981653003304!2d-79.34584702346241!3d43.820619841586094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d37b86ee9259%3A0x702223f2e2c68941!2s7321%20Victoria%20Park%20Ave%20%233%2C%20Markham%2C%20ON%20L3R%202Z8!5e0!3m2!1sen!2sca!4v1731521671743!5m2!1sen!2sca"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
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
                    className="contact-page__form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="8576f478-53ae-42cc-b97e-336489de47d7"
                    />
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <label className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            autoComplete="off"
                            required
                          />
                        </label>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <label className="contact-page__input-box">
                          <input
                            type="tel"
                            placeholder="Phone number"
                            name="phone"
                            autoComplete="off"
                            required
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <label className="contact-page__input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            autoComplete="off"
                            required
                          />
                        </label>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <label className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Company"
                            name="Company"
                            autoComplete="off"
                            required
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <label className="contact-page__input-box">
                          <textarea
                            name="message"
                            placeholder="Write message"
                            defaultValue={""}
                          />
                        </label>
                        <input type="hidden" name="redirect" value="http://can-am-new.vercel.app/submit"></input>
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
    </>
  );
};

export default Contact;
