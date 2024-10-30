import Head from "next/head";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";

const BuyingOrSelling = () => {
  //ADD ACTUAL LINKSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function addBuyOrSellJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Buying or Selling",
        "description": "Looking to buy or sell imaging equipment, parts, or supplies? Contact CanAm Imaging today to connect with our expert consultants and explore your options.",
        "url": "https://can-am-new.vercel.app/buying-or-selling",
        "mainEntity": {
          "@type": "Organization",
          "name": "CanAm Imaging",
          "url": "https://can-am-new.vercel.app/",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "Sales",
            "areaServed": "US",
            "availableLanguage": "English"
          }
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
              "name": "Buying or Selling",
              "item": "https://can-am-new.vercel.app/buying-or-selling"
            }
          ]
        }
      })
    }
  }
  return (
    <>
      <Head>
        <title>Buying Or Selling</title>
        <meta
          name="description"
          content="Looking to buy or sell imaging equipment, parts, or supplies? Contact CanAm Imaging today to connect with our expert consultants and explore your options."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBuyOrSellJsonLd()}
          key="buyorsell-jsonld"
        />
      </Head>
      <Layout footer={2}>
        <PageBanner pageName="Buying or Selling" />
        <section className="contact-page buyorsell-page">
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
                      <h4>Get in Touch</h4>
                      <span className="right" />
                    </div>
                    <h2 className="section-title__title">
                      Looking to Purchase/Sell Equipment, Parts or Supplies?
                    </h2>
                    <p className="buyorsell--para">
                      Simply complete and submit the form below and one of our
                      consultants will be in touch with you shortly.
                    </p>
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
                            type="text"
                            placeholder="Company"
                            name="Company"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="City"
                            name="city"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Zip/Postal Code"
                            name="zip/postalcode"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="contact-page__input-box">
                          <textarea
                            name="desc"
                            placeholder="Description (If equipment please include Make, Model, and Meter)"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="contact-page__input-box">
                          <textarea
                            name="addinfo"
                            placeholder="Additional Information"
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
    </>
  );
};

export default BuyingOrSelling;
