import axios from "axios";
import * as actionTypes from "./types";

const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});

export const getCoffeeShops = () => {
  return dispatch => {
    dispatch(setCoffeeShopsLoading());
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(shops =>
        dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: shops })
      )
      .catch(err => console.error(err.response.data));
  };
};
