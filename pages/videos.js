import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import { useState } from "react";
import VideoPopup from "../src/components/VideoPopup";

const Videos = () => {
  const [videoPopup, setVideoPopup] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const setVideoOne = () => {
    setVideoUrl("yi6ks7q_ZpQ");
    setVideoPopup(true);
  };

  const setVideoTwo = () => {
    setVideoUrl("Hkcx8B3kV0w");
    setVideoPopup(true);
  };

  return (
    <Layout>
      <PageBanner pageName="Videos" />
      {videoPopup && <VideoPopup close={setVideoPopup} videoID={videoUrl} />}
      <section className="blog-one">
        <div className="container">
          <div className="row video-wrapper">
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div
                className="about-one__video-gallery wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <img src="assets/images/about/video1.png" alt="image" />
                <div className="video-box">
                  <a
                    className="video-popup wow zoomIn animated animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                    title=" Video Gallery"
                    href="#"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "300ms",
                      animationName: "zoomIn",
                    }}
                    onClick={() => setVideoOne()}
                  >
                    <i className="fa fa-play" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div
                className="about-one__video-gallery wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <img src="assets/images/about/video2.png" alt="image" />
                <div className="video-box">
                  <a
                    className="video-popup wow zoomIn animated animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                    title=" Video Gallery"
                    href="#"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "300ms",
                      animationName: "zoomIn",
                    }}
                    onClick={() => setVideoTwo()}
                  >
                    <i className="fa fa-play" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </Layout>
  );
};

export default Videos;
