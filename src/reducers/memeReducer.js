import {
    FETCH_MEMES_REQUEST,
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
  } from '../actions/memeActions';
  
  const initialState = {
    memes: [], // Set the initial state for memes as an empty array
    loading: false,
    error: null,
  };
  
  const memeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MEMES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_MEMES_SUCCESS:
        return {
          ...state,
          loading: false,
          memes: action.payload, // Update memes state with fetched data
        };
      case FETCH_MEMES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default memeReducer;
  