import {
  CLEAR,
  MSG
} from '../contents/errContent'
import axiosConfig from "../../config/AxiosConfig";
import {
  ORDER,
  WAIT,
  REMOVEORDER,ADD_ORDER
} from '../contents/orderContent';
import {
  CLEAR_CART
} from '../contents/cartContent';

export const order = (data) => async (dispatch) => {
  try {

    await axiosConfig
      .post("/order", data)
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })
        } else {
          data.cart.activeorder = 0
          dispatch({
            type: CLEAR_CART
          });
          dispatch({
            type: ADD_ORDER,
            data: res.data.orders
          });



        }
      })
      .catch((err) => {
        dispatch({
          type: MSG,
          data: {
            type: 'bad',
            msg: err.message
          }
        })
      });




  } catch (e) {
    dispatch({
      type: MSG,
      data: {
        type: 'bad',
        msg: e.message
      }
    })
  }
}




export const getordersbyid = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .get("/order/orderclient", {
        params: {
          id: data.users_info.userid
        }
      })
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })
        } else {

          dispatch({
            type: ORDER,
            data: res.data
          });




        }
      })
      .catch((err) => {
        dispatch({
          type: MSG,
          data: {
            type: 'bad',
            msg: err.message
          }
        })
      });




  } catch (e) {
    dispatch({
      type: MSG,
      data: {
        type: 'bad',
        msg: e.message
      }
    })
  }
}




export const usersee = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .post("/order/usersee", {
        id: data
      })
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data: res.data.err
          })
        } else {

          dispatch({
            type: REMOVEORDER,
            data: data
          });




        }
      })
      .catch((err) => {
        dispatch({
          type: MSG,
          data: {
            type: 'bad',
            msg: err.message
          }
        })
      });




  } catch (e) {
    dispatch({
      type: MSG,
      data: {
        type: 'bad',
        msg: e.message
      }
    })
  }
}