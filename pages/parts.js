import Link from "next/dist/client/link";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import Image from "next/image";
import Head from "next/head";

const Parts = () => {
  function addPartsJsonLd() {
    return {
      __html: `
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Parts",
      "description": "Explore CanAm Imaging's extensive range of genuine Xerox and Kodak Digimaster parts, available at competitive prices.",
      "url": "https://can-am-new.vercel.app/parts", // Replace with your actual URL
      "mainEntity": {
        "@type": "Organization",
        "name": "CanAm Imaging",
        "url": "https://can-am-new.vercel.app/" // Replace with your actual URL
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://can-am-new.vercel.app/" // Replace with your actual URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Parts",
            "item": "https://can-am-new.vercel.app/parts" // Replace with your actual URL
          }
        ]
      }
  `,
    };
  }
  return (
    <>
      <Head>
        <title>Parts</title>
        <meta
          name="description"
          content="Explore CanAm Imaging's extensive range of genuine Xerox and Kodak Digimaster parts, available at competitive prices."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addPartsJsonLd()}
          key="parts-jsonld"
        />
      </Head>
      <Layout footer={2}>
        <PageBanner pageName="Parts" />
        <section className="why-choose-one why-choose-one-team">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="why-choose-one__content">
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>CanAm Parts</h4>
                    </div>
                    <h2 className="section-title__title">
                      Xerox and Kodak Digimaster Parts
                    </h2>
                  </div>
                  <p className="parts--para">
                    CanAm Imaging provides Xerox parts to the I.S.O and
                    Self-Service marketplace for the United States and Canada.
                    Whether you’re looking for new or used Xerox parts, you can
                    count on CanAm Imaging for parts that are fully guaranteed
                    and competitively priced to help you run your business
                    better – and for less. Get up to <b>75%</b> off a huge
                    selection of 100% genuine Xerox parts and rest assured that
                    we stand behind the products we sell, new and recycled.
                    Decommissioned from working equipment, all recycled parts
                    undergo a rigorous quality control process to ensure they’re
                    in reliable working order prior to purchase.
                  </p>
                  <Link href="/buying-or-selling">
                    <button className="parts-btn" type="submit">
                      <span className="thm-btn">
                        Interested in selling parts?&nbsp;
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
              <div
                className="col-xl-6 wow slideInRight"
                data-wow-delay="500ms"
                data-wow-duration="2500ms"
              >
                <div className="why-choose-one__img">
                  <Image
                    src="/assets/images/resources/100_2.jpg"
                    alt="image of parts"
                    width={580}
                    height={614}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Parts;
