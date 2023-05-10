import {
    CLEAR,
    MSG
  } from '../contents/errContent'

import axiosConfig from "../../config/AxiosConfig";
import {  SET_STORE_ITEMS } from '../contents/storeContent';
  


  export const setStoreProductsAction = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/store")
        .then((res) => {
          console.log('yes')
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: SET_STORE_ITEMS,
              data:res.data
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

  

  export const getAllMenu = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/store/menu")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
      return res.data.menu
          
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
  export const getAllSalads = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/salads")
        .then((res) => {
          if (res.data.err) {
            return dispatch({ 
              type: MSG,
              data: res.data.err
            })
          } else {
      return res.data.salads
          
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

  
  export const getAllServingWay = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/sevingway")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
      return res.data.servingway
          
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

  
  export const getAllProducts = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/products")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
      return res.data.menu
          
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