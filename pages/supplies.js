import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import Link from "next/dist/client/link";

const Supplies = () => {
  return (
    <Layout footer={2}>
      <PageBanner pageName="Supplies" />
      <section className="team-details-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="team-details-one__left col-xl-6 wow slideInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="team-details-one__left-img why-choose-one__img">
                  <img src="assets/images/team/temp.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6"
            >
              <div className="team-details-one__right">
                <div className="team-details-one__right-top-text">
                  <h2>We Meet Your Print and Copy Needs for Less</h2>
                  <p>
                    At CanAm Imaging, we offer an extensive selection of print
                    and copy supplies from leading manufacturers to ensure that
                    all your printing needs are met effortlessly. Our diverse
                    inventory is designed to provide you with high-quality
                    options that suit every requirement and budget. To place an
                    order for supplies, simply fill out and submit this
                    <a className="supplies--red" href="/buying-or-selling">
                      {" "}
                      form.
                      {" "}
                    </a>
                    Our dedicated team will review your request promptly and get
                    back to you within 4 hours to confirm your order and assist
                    with any additional needs.
                  </p>
                </div>
                <div className="team-details-one__right-top-text">
                  <h2 className="supplies-header">
                    Trade in Surplus Supplies for Cash
                  </h2>
                  <p>
                    Why let your surplus supplies take up valuable storage space
                    when you can trade them in for cash? Tell us what you’ve got
                    and we’ll make you an offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Supplies;
