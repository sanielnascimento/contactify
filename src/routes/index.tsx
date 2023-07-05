import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<ProtectedRoutes />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default RoutesMain;
