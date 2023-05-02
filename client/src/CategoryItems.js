import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const CategoryItems = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className=" ">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  key={p._id}
                  className="card m-2"
                  style={{ width: "12rem" }}
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
                      <div style={{ fontSize: "0.85rem" }}>
                        Click for detail
                      </div>
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
      </div>
    </Layout>
  );
};

export default CategoryItems;
