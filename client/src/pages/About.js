import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title={"About Ggear"}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2 className=" mb-4">
                Ggear is the leading e-commerce platform in Southeast Asia and
                Taiwan.{" "}
              </h2>

              <p className="">
                Launched in 2015, the Ggear commerce platform was built to
                provide users with an easy, safe and fast experience when
                shopping online through a strong payment support and operating
                system. We strongly believe that the online shopping experience
                should be simple, easy and emotionally pleasurable. This belief
                inspires and drives us every day at Ggear.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <img
                src="https://thumbs.dreamstime.com/b/gaming-gear-laying-table-laptop-computer-169384141.jpg"
                alt="about-img"
                className="about-image img-fluid"
              />

              <div className="about-text-info d-flex">
                <div className="ms-4">
                  <h3>About us</h3>

                  <p className="mb-0">Know more about us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
