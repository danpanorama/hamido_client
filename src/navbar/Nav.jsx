import {  NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './nav.css'


function Nav(props) {
  const dispatch = useDispatch();
  const [openNavState,setOpenNavState] = useState(false);
  const user = useSelector((state) => state.users);


  function openNave(){
    setOpenNavState(!openNavState)
  }

  return (
    <div className="posSticky padd bcwhite zz ">
      <div className="flexrow bet">
        <div className="logo">
          <h1>חמידו</h1>
        </div>

     <div className="navSide">
      <div onClick={openNave} className="buttonOpenNav">
        open 
      </div>
      <div className={openNavState? 'activeNav flexcol':'closeNav flexcol'}>
      <div onClick={openNave} className="buttonOpenNav">
        close 
      </div>
      {user.users_info.username ? user.users_info.username : ''}
      {user.users_info.userid ? user.users_info.userid : ''}
          <NavLink to='/store'>store</NavLink>
          <NavLink to='/register'>create</NavLink>
          <NavLink to='/store'>store</NavLink>
          <NavLink to='/store'>store</NavLink>
          
          {user.is_Log ?    <button onClick={props.logout}>logout</button> : ''}
        </div>
     </div>
      </div>
     
      

   
    </div>
  
  );
}

export default Nav;
