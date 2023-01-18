import * as actionTypes from "../contents/usersContent";

const initialState = {
  users_info: {},
  is_Log:false

};

const users = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.LOGIN:
      const login = {
        ...state,
      };
     if(action.data){
      let userInfo = JSON.stringify(action.data);
      localStorage.setItem('user',userInfo)
      login.is_Log = true
      login.users_info = action.data
     }else{
        login.users_info = []

     }

      return login;

  


    case actionTypes.LOGOUT:
      const logout = {
        ...state,
      };
      logout.is_Log = false;
      localStorage.setItem('token', undefined)
      localStorage.setItem("usercart", undefined);
      localStorage.setItem('user',undefined)
      logout.users_info ={};
      return logout;



      case actionTypes.STILL_CONNECT:  
      const stateStill = {...state}; 
      let user = localStorage.getItem('user');
      if(user != 'undefined'){
        let userInfo =JSON.parse(user)
      if(userInfo == undefined || userInfo == 'undefined' ){
        return stateStill
      }else{
        stateStill.users_info = userInfo
        stateStill.is_Log = true
      }}else{
        console.log('user is undefined')
      }
    

      return stateStill
        




    default:
      return state

  }
}

export default users