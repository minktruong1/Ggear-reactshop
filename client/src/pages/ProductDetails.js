import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";
import CommentFacebook from "../components/Layout/CommentFacebook";

const ProductDetails = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const initFacebookSDK = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    let locale = "vi_VN";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FB_ID, // You App ID
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.1", // use version 2.1
      });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  useEffect(() => {
    initFacebookSDK();
  }, []);

  return (
    <Layout>
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5">
              <div className="main-img">
                <img
                  className="img-fluid product-detail_img"
                  src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
                  alt="ProductS"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="main-description px-2">
                <div className="product-title text-bold my-3">
                  <h2>{product.name}</h2>
                </div>
                <div className="category text-bold">
                  <h4>Category: {product?.category?.name}</h4>
                </div>
                <div className="price-area my-4">
                  <h3 className="font text-bold mb-1">{product.price}$</h3>
                </div>
              </div>
              <div className="product-details my-4">
                <h4 className="details-title text-color mb-1">
                  Product Details
                </h4>
                <p className="description">{product.description}</p>
              </div>
              <div className="row questions bg-light p-3">
                <div className="col-md-1 icon">
                  <AiFillQuestionCircle
                    style={{ fontSize: "38px", color: "blue" }}
                  />
                </div>
                <div className="col-md-11 text">
                  Have a question about our products at E-Store? Feel free to
                  contact our representatives via live chat or email.
                </div>
              </div>
              <div className="delivery my-4">
                <p className="font-weight-bold mb-0">
                  <FaShippingFast />{" "}
                  <b>Delivery done in 3 days from date of purchase</b>{" "}
                </p>
                <p className="text-secondary">
                  Order now to get this product delivery
                </p>
              </div>
              <div className=" d-flex my-5">
                <div className="block">
                  <button
                    className="shadow btn custom-btn"
                    // onClick={console.log(product)}
                    onClick={() => {
                      setCart([...cart, product]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, product])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CommentFacebook
              dataHref={
                "https://developers.facebook.com/docs/plugins/comments#configurator"
              }
              width="1296"
            />
          </div>
        </div>
        <div className="container similar-products my-4">
          <hr />
          <h2>Similar Products</h2>
          {relatedProducts.length < 1 && (
            <div className="text-center">
              <h4 className="display-1 ">So sorry</h4>
              <p className="fs-3"> We don't have similar product</p>
              <p className="lead">Comeback next time</p>
            </div>
          )}
          <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
              <div
                key={p._id}
                className="card m-2"
                style={{ width: "11.5rem" }}
              >
                <div className="product-img">
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    onClick={() => navigate(`/product/${p.slug}`)}
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    className="product-hover"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    <div style={{ fontSize: "0.85rem" }}>Click for detail</div>
                  </div>
                </div>
                <div className="card-body product-info">
                  <h6
                    className="card-title"
                    onClick={() => navigate(`/product/${p.slug}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {p.name}
                  </h6>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text product-info_price"> $ {p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
