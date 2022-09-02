import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import { AuthProvider } from "./services/auth";
import "./styles/global.styles.css";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer limit={1} />
        <Routes />
      </AuthProvider>
    </>
  );
}
