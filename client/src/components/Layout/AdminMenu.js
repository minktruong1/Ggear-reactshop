import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/add-product"
            className="list-group-item list-group-item-action"
          >
            Add Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users-list"
            className="list-group-item list-group-item-action"
          >
            Users List
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
