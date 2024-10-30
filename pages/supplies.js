import Image from "next/image";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import Head from "next/head";

const Supplies = () => {
  //ADD ACTUAL LINKSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function addSuppliesJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Supplies",
        "description": "Discover a wide range of print and copy supplies at CanAm Imaging. Quality products to meet all your printing needs.",
        "url": "https://can-am-new.vercel.app/supplies",
        "mainEntity": {
          "@type": "Organization",
          "name": "CanAm Imaging",
          "url": "https://can-am-new.vercel.app/"
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
              "name": "Supplies",
              "item": "https://can-am-new.vercel.app/supplies"
            }
          ]
        }
      }),
    };
  }

  return (
    <>
      <Head>
        <title>Supplies</title>
        <meta
          name="description"
          content="Discover a wide range of print and copy supplies at CanAm Imaging. Quality products to meet all your printing needs."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addSuppliesJsonLd()}
          key="supplies-jsonld"
        />
      </Head>
      <Layout footer={2}>
        <PageBanner pageName="Supplies" />
        <section className="team-details-one">
          <div className="container">
            <div className="row supplies--swap-ori">
              <div className="col-xl-6 supplies--left-wrapper">
                <div
                  className="team-details-one__left col-xl-6 wow slideInLeft"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="team-details-one__left-img why-choose-one__img">
                    <Image
                      src="/assets/images/resources/100_1.jpg"
                      alt="image of supplies"
                      width={504}
                      height={553}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 supplies--right-wrapper">
                <div className="team-details-one__right">
                  <div className="team-details-one__right-top-text">
                    <h2>We Meet Your Print and Copy Needs for Less</h2>
                    <p>
                      At CanAm Imaging, we offer an extensive selection of print
                      and copy supplies from leading manufacturers to ensure
                      that all your printing needs are met effortlessly. Our
                      diverse inventory is designed to provide you with
                      high-quality options that suit every requirement and
                      budget. To place an order for supplies, simply fill out
                      and submit this
                      <a className="supplies--red" href="/buying-or-selling">
                        {" "}
                        form.{" "}
                      </a>
                      Our dedicated team will review your request promptly and
                      get back to you within 4 hours to confirm your order and
                      assist with any additional needs.
                    </p>
                  </div>
                  <div className="team-details-one__right-top-text">
                    <h2 className="supplies-header">
                      Trade in Surplus Supplies for Cash
                    </h2>
                    <p>
                      Why let your surplus supplies take up valuable storage
                      space when you can trade them in for cash? Tell us what
                      you’ve got and we’ll make you an offer.
                    </p>
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

export default Supplies;
