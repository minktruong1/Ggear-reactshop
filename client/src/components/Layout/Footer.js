import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div style={{ marginTop: "16px" }} className="row ">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <p className="mb-30 footer-desc">
                  Ggear - fun, reliable, safe and free online shopping app!
                  Shopee is the leading online trading platform in Southeast
                  Asia, headquartered in Singapore, present in Singapore,
                  Malaysia, Indonesia, Thailand, Philippines, Taiwan, Brazil,
                  Mexico & Colombia.
                </p>
                <img
                  src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png"
                  width="260px"
                  alt="img"
                />
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
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <p>92 Nguyen Trai, An Hoi, Ninh Kieu, Can Tho</p>
                  </li>
                  <li>
                    <p>
                      <Link to="/">minh10b2sadec@gmail.com</Link>
                    </p>
                  </li>
                  <li>
                    <p>0939465116</p>
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
