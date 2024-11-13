import Link from "next/link";
import Layout from "../src/components/Layout";

const Submit = () => {
  return (
    <Layout footer={2}>
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div
                  className="error-page__content text-center wow slideInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>Thanks for getting in touch!</h3>
                  <div className="error-page__btn">
                    <Link
                      href="/"
                      aria-label="Go to Home Page"
                      className="thm-btn"
                    >
                      Go To Home&nbsp;
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Submit;
