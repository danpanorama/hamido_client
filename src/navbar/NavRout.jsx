import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home";
import Store from "../pages/Store";
import CreateUser from "../pages/CreateUser";
import PrivateRoute from "../privateRouter/PrivateRouter";
import PrivateRouterlogin from "../privateRouter/PrivateRouterlogin";

import LoginPage from "../pages/LoginPage";

function NavRoute(props) {
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <Nav logout={props.logout} />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/store" element={<PrivateRoute />} exact>
            <Route path="/store" element={<Store />} exact />
          </Route>

          <Route path="/register" element={<CreateUser />} exact />

          <Route path="/login" element={<PrivateRouterlogin />} exact>
          <Route path="/login" element={<LoginPage />} exact />
          </Route>



  
         
         
          
        </Routes>
      </div>
    </div>
  );
}

export default NavRoute;
