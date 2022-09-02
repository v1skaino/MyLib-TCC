import { Navigate, Route, Routes } from "react-router-dom";
import ListClientsController from "../pages/Clientes/screens/ListClients/ListClients.controller";
import DashboardController from "../pages/Dashboard/screens/Dashboard.controller";

const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<DashboardController />} />
    <Route path="/clients" element={<ListClientsController />} />
  </Routes>
);

export default AppRoutes;
