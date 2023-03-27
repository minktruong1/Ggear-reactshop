import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h3>Logo</h3>
                <p className="mb-30 footer-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta facilis eos quia optio iusto odit atque eum tempore,
                  quisquam officiis vero veniam hic,
                </p>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
              <div className>
                <h4>Quick Link</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about" className="text-decoration-none">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/policy" className="text-decoration-none">
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-decoration-none">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Service</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-decoration-none">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none">
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-decoration-none">
                      Graphics Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Address</h4>
                <ul className="list-unstyled">
                  <li>
                    <p>+017367234</p>
                  </li>
                  <li>
                    <p>
                      <a to="/">JhoneDoe@gmail.com</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      New York City in New York State New York City comprises 5
                      boroughs sitting where the Hudson River meets th
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="copyright">
              <p>
                Developed and maintained by{" "}
                <Link to="/" target="_blank">
                  company
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
