import Layout from "../../../src/components/Layout";
import PageBanner from "../../../src/components/PageBanner";
import React from "react";
import { useRouter } from 'next/router';
import data from "../../../data/equipment.json"

const ProductDetails = () => {
  const router = useRouter();
  const { category, id } = router.query;

  if (!category || !id) {
    return <div></div>;
  }

  const getProductData = (categoryName, productId) => {
    const category = data.find(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (category) {
      const product = category.products.find((prod) => prod.id === productId);
      return product || null;
    }

    return null;
  };

  const productData = getProductData(category, id);
  console.log(productData)
  return (
    <Layout>
      <PageBanner pageName={productData.name} />
      <section className="portfolio-details">
        <div className="container">
          <div className="portfolio-details__gallery">
            <div className="row">
              <div className="col-lg-8">
                <img
                  src=""
                  alt="image"
                />
              </div>
              {/* /.col-lg-8 */}
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <img
                      src=""
                      alt="image"
                    />
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-lg-12 col-md-6">
                    <img
                      src=""
                      alt="image"
                    />
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.portfolio-gallery */}
          <div className="row">
            <div className="col-lg-8">
              <div className="portfolio-details__content">
                <h3 className="portfolio-details__content__title">
                  Sales &amp; Marketing Analysis
                </h3>
                {/* /.portfolio-details__content__title */}
                <p className="letter-caps">
                  {" "}
                  Quis autem vel eum iure reprehenderit quiin voluptate velit
                  esse quam nihil molestiae consequatur, vel illum solorem eum
                  fugiat quo voluptas nulla pariatur laudantium totam rem
                  aperquae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quiluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{" "}
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laud ium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatvitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quiluptas sit
                  aspernatur aut odit aut fugit sed quia consequuntur magni
                  dolores eos qui ratione
                </p>
                <blockquote>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system expound the actual
                  teachings of great explorer of the truth, the master-builder
                  of human happiness
                </blockquote>
                <p>
                  Voluptatem accusantium doloremque laud totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto beatvitae
                  dicta sunt explicabo.
                </p>
              </div>
              {/* /.portfolio-details__content */}
            </div>
            {/* /.col-lg-8 */}
            <div className="col-lg-4">
              <div className="portfolio-details__info">
                <h3 className="portfolio-details__info__title">
                  Project Details
                </h3>
                {/* /.portfolio-details__info__title */}
                <ul className="list-unstyled">
                  <li>
                    <span>Clients</span>
                    <strong>Blaine D. Cotton</strong>
                  </li>
                  <li>
                    <span>Project</span>
                    <strong>IT Consulting</strong>
                  </li>
                  <li>
                    <span>Service</span>
                    <strong>Corporate</strong>
                  </li>
                  <li>
                    <span>Category</span>
                    <strong>Sales &amp; Marketing</strong>
                  </li>
                  <li>
                    <span>Date</span>
                    <strong>25 May 2021</strong>
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.portfolio-details__info */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </Layout>
  );
};

export default ProductDetails;
