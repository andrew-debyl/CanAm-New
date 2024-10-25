import Layout from "../src/components/Layout";
import PageBanner from "../src/components/PageBanner";
import galleryData from "../data/gallery.json";
import { useState } from "react";
import Image from "next/image";

const Modal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="" />
        <button onClick={onClose} className="close-button">
          <img src="/assets/images/icon/close-line-icon.png" alt=""></img>
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
                    <img src={data.img} alt="image"/>
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
  );
};

export default Gallery;
