import { Routes, Route, Navigate } from "react-router-dom";
import LoginController from "../pages/Login/screens/Login.controller";

const AuthRoutes = () => (
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AuthRoutes;
