import axios from "axios";
import {
  PUBLISHER_REQUEST,
  PUBLISHER_SUCCESS,
  PUBLISHER_FAIL,
  CLEAR_ERRORS,
} from "../constants/publisherConstants";

// Create Publisher
export const createPublisher = (publisherData) => async (dispatch) => {
  try {
    dispatch({ type: PUBLISHER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "https://hubitcms.herokuapp.com/smart-cms/api/1.0/client/create",
      publisherData,
      config
    );

    dispatch({
      type: PUBLISHER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: PUBLISHER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
