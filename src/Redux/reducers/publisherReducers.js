import {
  PUBLISHER_REQUEST,
  PUBLISHER_SUCCESS,
  PUBLISHER_FAIL,
  CLEAR_ERRORS,
} from "../constants/publisherConstants";

export const publisherReducers = (state = { publisher: {} }, action) => {
  switch (action.type) {
    case PUBLISHER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case PUBLISHER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        publisher: action.payload,
      };
    case PUBLISHER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        publisher: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
