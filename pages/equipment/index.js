import Link from "next/dist/client/link";
import Layout from "../../src/components/Layout";
import PageBanner from "../../src/components/PageBanner";
import { useEffect } from "react";
import equData from "../../data/equipment.json";
import Head from "next/head";

const Equipment = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>Equipment</title>
        <meta
          name="description"
          content="Explore CanAm Imaging's top-quality reconditioned imaging equipment, including Xerox and pre-owned products from Canon, Kodak, Konica Minolta, and Ricoh. Our expert consultants are ready to help you find the perfect solution for your business needs."
        />
      </Head>
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
                reconditioned equipment, backed by our knowledgeable
                consultants. We also remarket pre-owned products from Canon,
                Kodak, Konica Minolta, Ricoh, and Xerox. Share your business
                challenges with us, and our team will help you find the ideal
                solution while also offering to purchase your surplus equipment.
                Learn more about selling{" "}
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
                        {equData.map((tab) => (
                          <button
                            key={tab.subName}
                            className={`nav-link ${
                              "xerox" === tab.subName ? "active" : ""
                            }`}
                            type="button"
                            role="tab"
                            aria-controls={tab.subName}
                            aria-selected={"xerox" === tab.subName}
                            id={`${tab.subName}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${tab.subName}`}
                          >
                            {tab.name}
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
                    key={tab.subName}
                    className={`tab-pane fade ${
                      "xerox" === tab.subName ? "show active" : ""
                    }  equipment-items-wrapper`}
                    id={tab.subName}
                    role="tabpanel"
                    aria-labelledby={`${tab.subName}-tab`}
                  >
                    {tab.products.map((product) => (
                      <Link
                        key={product.id}
                        className="equipment-item filter-item development finance"
                        href={`/equipment/${tab.subName}/${product.id}`}
                      >
                        <div className="case-studies-one__single">
                          <div className="case-studies-one__single-img">
                            <img src={product.img} alt="image" />
                          </div>
                          <div className="overly-text-equipment">
                            <h3>{product.name}</h3>
                            <p className="equipment-subname">
                              {product.subName}
                            </p>
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
    </>
  );
};

export default Equipment;
