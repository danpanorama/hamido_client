import { useState } from 'react';
import '../../App.css';
import {useDispatch,useSelector} from "react-redux";
import { LogOutAction, LoginAction } from '../../Redux/Actions/usersAction';

function LoginComp() {
  const [userName,setUsername] = useState('')
  const [userPass,setUserPass] = useState('')


  const dispatch = useDispatch()


  function getUserName(e){    
    setUsername(e.target.value)
  }
   function getUserPass(e){
    setUserPass(e.target.value)
  }
  function login(){
    dispatch(LoginAction({pass:userPass,name:userName}))

  }
  return (
    <div className="">
      <input type="text" onChange={getUserName}  />
      <input type="password" onChange={getUserPass}  />
      <button onClick={login} >login</button>
    
    </div>
  );
}

export default LoginComp;
