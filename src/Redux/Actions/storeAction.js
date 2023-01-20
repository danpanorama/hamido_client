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

  

