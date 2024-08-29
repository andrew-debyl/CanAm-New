import Link from "next/dist/client/link";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";

const Parts = () => {
  return (
    <Layout footer={2}>
      <PageBanner pageName="Parts" />
      <section
        className="why-choose-one why-choose-one-team"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/why-choose-one-team-bg.png)",
        }}
      >
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
                  count on CanAm Imaging for parts that are fully guaranteed and
                  competitively priced to help you run your business better –
                  and for less. Get up to <b>75%</b> off a huge selection of
                  100% genuine Xerox parts and rest assured that we stand behind
                  the products we sell, new and recycled. Decommissioned from
                  working equipment, all recycled parts undergo a rigorous
                  quality control process to ensure they’re in reliable working
                  order prior to purchase.
                </p>
                <Link href="/buying-or-selling">
                <button className="parts-btn" type="submit">
                  <span className="thm-btn">
                    Interested in selling parts?
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
                <img src="assets/images/resources/temp4.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Parts;
