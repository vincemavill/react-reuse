import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import "../assets/stylesheet.css";
import { Route, Routes, Navigate } from "react-router-dom";
import auth from "./Authentication";
// import { PrivateRoute } from "./Authentication";
export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </div>
  );
}
const PrivateRoute = ({ component: RouteComponent }) => {
  // const isAuthenticated = true;
  if (auth.isAuthenticated()) {
    return <RouteComponent />;
  } else {
    return <Navigate to="/" />;
  }
};
