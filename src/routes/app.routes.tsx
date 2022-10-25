import { Navigate, Route, Routes } from "react-router-dom";
import ListClientsController from "../pages/Clientes/screens/ListClients/ListClients.controller";
import DashboardController from "../pages/Dashboard/screens/Dashboard.controller";
import WelcomeController from "../pages/Welcome/screens/Welcome.controller";

const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/welcome" />} />
    <Route path="/welcome" element={<WelcomeController />} />
    <Route path="/dashboard" element={<DashboardController />} />
    <Route path="/clients" element={<ListClientsController />} />
  </Routes>
);

export default AppRoutes;
