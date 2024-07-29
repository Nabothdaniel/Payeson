import { Helmet } from "react-helmet";
import Login from "./pages/main/Home";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="bg-gray-100 h-screen font-Roboto  w-screen overflow-x-hidden ">
        <Outlet />
    </div>
  );
};

export default App;
