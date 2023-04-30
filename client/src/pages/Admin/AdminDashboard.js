import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center">AdminDashboard</h1>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75">
                <h1>{auth?.user?.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
