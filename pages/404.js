import Link from "next/link";
import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";

const Error = () => {
  return (
    <Layout footer={2}>
      <PageBanner pageName="404" />
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
                  <h3>This Page Does Not Exist</h3>
                  <div className="error-page__btn">
                    <Link href="/" className="thm-btn">
                      Go To Home&nbsp;
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Error;
