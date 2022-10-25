import { ToastContainer } from "react-toastify";
import Routes from "./routes";

import "./styles/global.styles.css";

export default function App() {
  return (
    <>
      <ToastContainer limit={1} />
      <Routes />
    </>
  );
}
