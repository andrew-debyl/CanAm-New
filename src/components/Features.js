const Features = () => {
  return (
    <section className="features-one features-one--features-five clearfix">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="features-one__single wow fadeInLeft animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="features-one__single-left">
                <div className="features-one__single-left-icon">
                  <img
                    src="/assets/images/icon/customer-service.png"
                    alt="image"
                  />
                </div>
                <div className="features-one__single-left-text">
                  <h4>
                    Dedicated to Delivering
                    <br />
                    Exceptional Customer Service
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="features-one__single wow fadeInRight animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="features-one__single-left">
                <div className="features-one__single-left-icon">
                  <img src="/assets/images/icon/support.png" alt="image" />
                </div>
                <div className="features-one__single-left-text">
                  <h4>
                    Empowering Efficiency with
                    <br />
                    Expert Solutions and Support
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
