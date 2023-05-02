import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
const SearchPage = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div>
          <h1 className="text-center">Search results for "{values.keyword}"</h1>
          <h3 className="text-center">
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} items`}
          </h3>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
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

export default SearchPage;
