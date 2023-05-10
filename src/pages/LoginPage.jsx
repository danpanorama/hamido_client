import '../App.css';
import LoginComp from '../components/register/LoginComp';
import {  NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <div className="create_user">
      <LoginComp/>
      <NavLink to={'/register'}>create user</NavLink>
    </div>
  );
}

export default LoginPage;
