import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";

// import PrivateRoute from "../routes/PrivateRout";
// import AdminHardPermissions from "../routes/AdminHardPermissions";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home";
import Store from "../pages/Store";



function NavRoute() {
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <Nav/>
      
<div className="">
<Routes>
<Route path="/" element={<Home/>} exact/>

<Route path="/store" element={<Store/>} exact/>


{/* <Route path="/productlist" element={ <PrivateRoute />} exact> 
<Route path="/productlist" element={<ProductStore/>} exact/>
</Route> */}
{/* 
<Route path="/usersscreen" element={ <AdminHardPermissions />} exact> 
<Route path="/usersscreen" element={<UsersScreen/>} exact/>
</Route> */}

</Routes>
</div>
   
    </div>
  
  );
}

export default NavRoute;
