import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import galleryData from "../data/gallery.json";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const Modal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Image src={image} alt="" width={800} height={600}/>
        <button onClick={onClose} className="close-button">
          <Image src="/assets/images/icon/close-line-icon.png" alt="" width={30} height={30}/>
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsToggle(true);
  };

  return (
    <>
      <Head>
        <title>Buying Or Selling</title>
        <meta
          name="description"
          content="Explore our gallery showcasing our equipment and supplies. Click on any image for a closer view."
        />
      </Head>
      <Layout>
        <PageBanner pageName="Gallery" />
        <section className="blog-one">
          <div className="container">
            <div className="row">
              {galleryData.map((data) => (
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                  key={data.id}
                >
                  <div className="blog-one__single">
                    <div
                      className="blog-one__single-img disable-click"
                      onClick={() => handleImageClick(data.img)}
                    >
                      <Image src={data.img} alt="image" width={300} height={300}/>
                    </div>
                    <h5 className="gallery-heading">{data.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Modal
          isOpen={isToggle}
          image={selectedImage}
          onClose={() => setIsToggle(false)}
        />
      </Layout>
    </>
  );
};

export default Gallery;
