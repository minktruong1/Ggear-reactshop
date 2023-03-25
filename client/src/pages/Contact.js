import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact Ggear"}>
      <div className="mt-5 conatiner">
        <div className="text-center">
          <h3 className="text-primary">How Can We Help You?</h3>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisic
          </p>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
          <div className="bg-white col-md-4">
            <div className="p-4 rounded shadow-md">
              <div>
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mt-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  cols={20}
                  rows={6}
                  className="form-control"
                  placeholder="message"
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-primary">Submit Form</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
