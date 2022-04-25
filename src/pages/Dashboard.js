import React from "react";
import auth from "./../approutes/Authentication";
import { useNavigate } from "react-router-dom";
import Navbar from "./component/Navigation";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mw-form mx-auto my-5">
          <h1>Dashboard Admin</h1>
        </div>
      </div>
    </div>
  );
}
