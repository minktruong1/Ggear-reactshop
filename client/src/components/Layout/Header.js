import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchBar from "../Form/SearchBar";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { BiLogIn } from "react-icons/bi";
import { SlNote } from "react-icons/sl";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("You just logout");
  };
  return (
    <>
      <div id="header" className="sticky-top">
        <div className="container">
          <div className="row pt-3 pb-2">
            <div className="header_left col-md-2">
              <Link to="/" className="navbar-brand">
                <img
                  src="https://drive.google.com/uc?id=1bd5GaHPmS_n5dlKfgxH43Md_hjGKYH_u"
                  width={110}
                  height={72}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="row col-md-10">
              <div className="header_middle col-md-8 ">
                <SearchBar />
              </div>
              <div className="header_right col-md-4">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
                  {!auth.user ? (
                    <>
                      <li className="nav-item">
                        <NavLink to="/register" className="nav-link">
                          <SlNote
                            className="me-2 "
                            style={{ fontSize: "28px" }}
                          />
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/login" className="nav-link">
                          <BiLogIn
                            className="me-2"
                            style={{ fontSize: "28px" }}
                          />
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        style={{ fontSize: "18px" }}
                        className="nav-item dropdown"
                      >
                        <NavLink
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {auth?.user?.name}
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                              className="dropdown-item"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={handleLogout}
                              to="/login"
                              className="dropdown-item"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}

                  <li className="nav-item mt-1">
                    <Badge offset={[-42, 10]} count={cart?.length}>
                      <NavLink to="/cart" className="nav-link">
                        <FaShoppingCart
                          className="me-2"
                          style={{ fontSize: "28px" }}
                        />{" "}
                        Cart
                      </NavLink>
                    </Badge>
                  </li>
                </ul>
              </div>
              <div style={{ fontSize: "18px" }} className="row">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link ">
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={"/categories"}
                      data-bs-toggle="dropdown"
                    >
                      Categories
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={"/categories"}>
                          All Categories
                        </Link>
                      </li>
                      {categories?.map((c) => (
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/category/${c.slug}`}
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
