import {
    CLEAR,
    MSG
  } from '../contents/errContent'

import axiosConfig from "../../config/AxiosConfig";
import { ADD_SERVWAY, REMOVE_SERVWAY, SET_SERVWAY } from '../contents/servwayContent';
import { CREATE_ACOUNT, LOGIN, LOGOUT } from '../contents/usersContent';
  


  export const LoginAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/users/login")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: LOGIN,
              data:res.data.user
            });
            dispatch({
              type: MSG,
              data: res.data.msg
            })
          
          }
        })
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        });
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  


  export const LogOutAction = (data) => async (dispatch) => {
    try {
      dispatch({type:LOGOUT})
     
     
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  
 
  export const createUserAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/users/login",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: CREATE_ACOUNT,
              data:data
            });
            dispatch({
              type: MSG,
              data: res.data.msg
            })
          }
        })
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        });
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }




  