import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US");
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2">
              {`Hi ${auth?.token && auth?.user?.name}, this is your cart`}
            </h1>
            <h4 className="text-center">
              {cart?.length >= 1
                ? `You have ${cart.length} items ${
                    auth?.token ? "" : "Login to checkout!"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              {cart?.map((p) => (
                <div className="card mb-3" key={p._id}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                            className="img-fluid rounded-3"
                            alt="Product-item"
                            style={{ width: 75 }}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>{p.name}</h5>
                          <p className="small mb-0">
                            {p.description.substring(0, 30)}...
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">{p.price}$</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <FaTrash
                            style={{ color: "red", fontSize: "20px" }}
                            onClick={() => removeCartItem(p._id)}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <hr />
                <h4>Total: {totalPrice()}</h4>
              </div>
            </div>
            <div className="col-md-5 ">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />

                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing ...." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
