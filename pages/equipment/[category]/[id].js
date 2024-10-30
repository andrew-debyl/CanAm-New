import Layout from "../../../src/components/Layout";
import PageBanner from "../../../src/components/PageBanner";
import React from "react";
import { useRouter } from "next/router";
import data from "../../../data/equipment.json";
import Link from "next/link";
import Head from "next/head";

const ProductDetails = () => {
  const router = useRouter();
  const { category, id } = router.query;

  if (!category || !id) {
    return <div></div>;
  }

  const getProductData = (categoryName, productId) => {
    const category = data.find(
      (cat) => cat.subName.toLowerCase() === categoryName.toLowerCase()
    );

    if (category) {
      const product = category.products.find((prod) => prod.id === productId);
      return product || null;
    }

    return null;
  };

  const productData = getProductData(category, id);

  //ADD ACTUAL LINKSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function addEquiPeiceJsonLd(product) {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.desc,
        "image": product.img,
        "brand": {
          "@type": "Brand",
          "name": "CanAm Imaging"
        },
        "sku": product.id,
        "offers": {
          "@type": "Offer",
          "url": `https://can-am-new.vercel.app/equipment/${product.name}/${product.id}`
        },
        "additionalType": "https://schema.org/Thing"
      })
    }
  }

  return (
    <>
      <Head>
        <title>{productData.name}</title>
        <meta
          name="description"
          content={`Discover detailed information about the ${productData.name} ${productData.subName} from CanAm Imaging. Explore features, specifications, and more!`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addEquiPeiceJsonLd(productData)}
          key="equipeice-jsonld"
        />
      </Head>
      <Layout>
        <PageBanner pageName={productData.name} />
        <section className="portfolio-details">
          <div className="container">
            <div className="portfolio-details__gallery">
              <div className="row">
                <div className="equipment-spec-img-wrapper">
                  <img src={productData.img} alt="image of product" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <div className="portfolio-details__content">
                  <div className="equipment-heading-wrapper">
                    <div>
                      <h3 className="portfolio-details__content__title">
                        {productData.name}
                      </h3>
                      <h4 className="portfolio-details__content__subtitle ">
                        {productData.subName}
                      </h4>
                    </div>
                    <div className="equipment-brochure-wrapper">
                      <Link href={productData.brochure} target="_blank" className="equipment-brochure">
                        Product Brochure
                      </Link>
                    </div>
                  </div>
                  <p className="">{productData.desc}</p>
                  <br />
                  <ul>
                    {productData.features.map((feature) => (
                      <li key={feature.id}>{feature.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
};

export default ProductDetails;
