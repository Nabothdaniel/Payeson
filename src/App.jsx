import { Helmet } from "react-helmet";
import Login from "./pages/Home";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className=" h-screen font-popins  w-screen overflow-x-hidden ">
      <Outlet />
    </div>
  );
}; 

export default App;
