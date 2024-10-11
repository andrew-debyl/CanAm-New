import Link from "next/dist/client/link";
import Layout from "../../src/components/Layout";
import PageBanner from "../../src/components/PageBanner";
import { useEffect } from "react";
import equData from "../../data/equipment.json";

const Equipment = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <PageBanner pageName="Equipment" />
      <section className="case-studies-one case-studies-one--portfolio-grid">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Top Equipment</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Unmatched Quality in <br />
              Reconditioned Imaging Equipment
            </h2>
            <br />
            <p>
              At CanAm Imaging, we deliver the highest quality Xerox
              reconditioned equipment, backed by our knowledgeable consultants.
              We also remarket pre-owned products from Canon, Kodak, Konica
              Minolta, Ricoh, and Xerox. Share your business challenges with us,
              and our team will help you find the ideal solution while also
              offering to purchase your surplus equipment. Learn more about
              selling{" "}
              <Link href="/buying-or-selling" className="equipment--red">
                here.
              </Link>
            </p>
          </div>
          <div className="row">
            <div className="case-studies-one--portfolio-grid__top">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="case-studies-one--portfolio-grid__menu-box">
                  <div className="project-filter clearfix post-filter has-dynamic-filters-counter list-unstyled">
                    <div
                      className="nav nav-tabs equipment-options"
                      id="nav-tab"
                      role="tablist"
                    >
                      {[
                        "Printer",
                        "Copier",
                        "Scanner",
                        "Laptop",
                        "Tablet",
                        "Desktop",
                        "Server",
                      ].map((tab) => (
                        <button
                          key={tab}
                          className={`nav-link ${
                            "Printer" === tab ? "active" : ""
                          }`}
                          type="button"
                          role="tab"
                          aria-controls={tab}
                          aria-selected={"Printer" === tab}
                          id={`${tab}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#${tab}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row filter-layout masonary-layout">
            <div className="tab-content" id="nav-tabContent">
              {equData.map((tab) => (
                <div
                  key={tab.name}
                  className={`tab-pane fade ${
                    "Printer" === tab.name ? "show active" : ""
                  }`}
                  id={tab.name}
                  role="tabpanel"
                  aria-labelledby={`${tab.name}-tab`}
                >
                  {tab.products.map((product) => (
                    <Link
                      key={product.id}
                      className="col-xl-4 col-lg-4 col-md-6 filter-item development finance"
                      href={`/equipment/${tab.name}/${product.id}`}
                    >
                      <div className="case-studies-one__single ">
                        <div className="case-studies-one__single-img">
                          <img
                            src="assets/images/resources/case-studies-v1-img5.jpg"
                            alt="image"
                          />
                          <div className="overly-text">
                            <h3>{product.name}</h3>
                            <p>{product.subName}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;