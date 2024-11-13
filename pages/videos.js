import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import { useState } from "react";
import VideoPopup from "../src/components/VideoPopup";
import Head from "next/head";

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

  //ADD ACTUAL LINKSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function addVideosJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Videos",
        "description": "Explore our video gallery showcasing CanAm Imaging's products and services. Watch tutorials and demonstrations.",
        "url": "https://can-am-new.vercel.app/videos",
        "mainEntity": {
          "@type": "VideoGallery",
          "name": "CanAm Imaging Video Gallery",
          "description": "A collection of videos showcasing products and services.",
          "video": [
            {
              "@type": "VideoObject",
              "name": "First Video",
              "description": "Tutorial or demonstration for the first product.",
              "thumbnailUrl": "https://can-am-new.vercel.app/assets/images/about/video1.png",
              "uploadDate": "2024-10-25T08:00:00-04:00",
              "contentUrl": "https://www.youtube.com/watch?v=yi6ks7q_ZpQ",
              "embedUrl": "https://www.youtube.com/embed/yi6ks7q_ZpQ"
            },
            {
              "@type": "VideoObject",
              "name": "Second Video",
              "description": "Tutorial or demonstration for the second product.",
              "thumbnailUrl": "https://can-am-new.vercel.app/assets/images/about/video2.png",
              "uploadDate": "2024-10-25T08:00:00-04:00",
              "contentUrl": "https://www.youtube.com/watch?v=Hkcx8B3kV0w",
              "embedUrl": "https://www.youtube.com/embed/Hkcx8B3kV0w"
            }
          ]
        }
      })
    }
  }

  return (
    <>
      <Head>
        <title>Videos</title>
        <meta
          name="description"
          content="Explore our video gallery showcasing CanAm Imaging's products and services. Watch tutorials and demonstrations."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addVideosJsonLd()}
          key="videos-jsonld"
        />
      </Head>
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
                  <img src="assets/images/about/video1.png" alt="first video" />
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
                  <h5 className="gallery-heading">Nuvera 157EA Test Run</h5>
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
                  <img src="assets/images/about/video2.png" alt="second video" />
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
                  <h5 className="gallery-heading">Nuvera 314EA Test Run</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </Layout>
    </>
  );
};

export default Videos;
