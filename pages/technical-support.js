import Image from "next/image";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import Head from "next/head";

const TechnicalSupport = () => {
  //ADD ACTUAL LINKSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function addTechSupportJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Technical Support",
        "description": "Explore technical support services at CanAm Imaging, including troubleshooting, consulting, and prompt assistance from qualified technicians.",
        "url": "https://can-am-new.vercel.app/technical-support",
        "mainEntity": {
          "@type": "Organization",
          "name": "CanAm Imaging",
          "url": "https://can-am-new.vercel.app/",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "English"
          }
        },
        "potentialAction": {
          "@type": "ContactAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://can-am-new.vercel.app/contact",
          },
          "name": "Contact Us"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://can-am-new.vercel.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Technical Support",
              "item": "https://can-am-new.vercel.app/technical-support"
            }
          ]
        }
      })
    }
  }
  return (
    <>
      <Head>
        <title>Technical Support</title>
        <meta
          name="description"
          content="Explore technical support services at CanAm Imaging, including troubleshooting, consulting, and prompt assistance from qualified technicians."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addTechSupportJsonLd()}
          key="techsupport-jsonld"
        />
      </Head>
      <Layout footer={2}>
        <PageBanner pageName="Technical Support" />
        <section className="services-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-8">
                <div className="services-details__sidebar">
                  <div
                    className="services-details__services-list-box wow fadeInUp animated"
                    data-wow-delay="0.0s"
                    data-wow-duration="1200ms"
                  >
                    <h3 className="services-details__sidebar-title">
                      Our Services
                    </h3>
                    <ul className="services-details__services-list list-unstyled">
                      <li>
                        <p>Troubleshooting</p>
                      </li>
                      <li>
                        <p>Technical Support</p>
                      </li>
                      <li>
                        <p>Consulting Services</p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="services-details__services-conatct-box wow fadeInUp animated"
                    data-wow-delay="0.1s"
                    data-wow-duration="1200ms"
                  >
                    <h3 className="services-details__sidebar-title">
                      Contact Us
                    </h3>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      id="review-form"
                      action="#"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-box">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-box">
                            <textarea
                              name="review"
                              placeholder="Message"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button className="conatct-one" type="submit">
                            <span className="thm-btn">
                              Send Message
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="services-details-content">
                  <div className="services-details__text-box1">
                    <h2>CanAm Imaging - At Your Service</h2>
                    <p>
                      To ensure you get the maximum benefit from your CanAm
                      Imaging purchase, we have assembled a dedicated team of
                      highly qualified technicians who are available to assist
                      you every step of the way. Our experts are on hand to
                      support you with any issues that may arise during the
                      setup or maintenance of your equipment. Whether you need
                      help with initial installation, troubleshooting, or
                      ongoing maintenance, our technicians are committed to
                      providing prompt, effective solutions to keep your
                      equipment running smoothly and efficiently. Your
                      satisfaction and the optimal performance of your equipment
                      are our top priorities.
                    </p>
                  </div>
                  <div className="services-details-img1">
                    <Image
                      src="/assets/images/resources/100_3.jpg"
                      alt="image of warehouse"
                      width={702}
                      height={395}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TechnicalSupport;
