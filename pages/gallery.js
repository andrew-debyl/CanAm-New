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
        <Image src={image} alt="image from gallery" width={800} height={600}/>
        <button onClick={onClose} className="close-button">
          <Image src="/assets/images/icon/close-line-icon.png" alt="close button" width={30} height={30}/>
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

  //ADD ACTUAL LINKSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function addGalleryJsonLd() {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Gallery",
      "description": "Explore our gallery showcasing our equipment and supplies. Click on any image for a closer view.",
      "url": "https://can-am-new.vercel.app/gallery",
      "mainEntity": {
        "@type": "Organization",
        "name": "CanAm Imaging",
        "url": "https://can-am-new.vercel.app/",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "Customer Service",
          "areaServed": "US",
          "availableLanguage": "English"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://can-am-new.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gallery",
            "item": "https://can-am-new.vercel.app/gallery"
          }
        ]
      },
      "image": galleryData.map(data => ({
        "@type": "ImageObject",
        "url": data.img,
        "name": data.name,
        "description": `Image of ${data.name}`
      }))
      })
    }
  }

  return (
    <>
      <Head>
        <title>Buying Or Selling</title>
        <meta
          name="description"
          content="Explore our gallery showcasing our equipment and supplies. Click on any image for a closer view."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addGalleryJsonLd()}
          key="gallery-jsonld"
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
                      <Image src={data.img} alt="image from gallery" width={300} height={300}/>
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
