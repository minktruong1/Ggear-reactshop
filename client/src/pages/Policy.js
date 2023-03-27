import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policy Ggear"}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <img
                src="https://www.alert-software.com/hubfs/writing%20company%20policies.png"
                alt="policy-img"
                className="about-image img-fluid"
              />

              <div className="about-text-info d-flex">
                <div className="ms-4">
                  <h3>Policy</h3>

                  <p className="mb-0">
                    your amazing festival experience with us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2 className=" mb-4">Privacy policy</h2>

              <p className="">
                You agree not to provide us with any information that is
                inaccurate or misleading, and you agree to notify us of any
                inaccurate or misleading information or when it changes. We
                reserve the right, in our sole discretion, to request other
                necessary documents to verify any information you provide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
