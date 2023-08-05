import axios from "axios";
const API_URL = 'https://api.imgflip.com/get_memes';

//ACTION TYPES

export const FETCH_MEMES_REQUEST = 'FETCH_MEMES_REQUEST'
export const FETCH_MEMES_SUCCESS = 'FETCH_MEMES_SUCCESS'
export const FETCH_MEMES_FAILURE = 'FETCH_MEMES_FAILURE'

//ACTION CREATORS 

export const fetchMemesRequest = () => ({
    type:FETCH_MEMES_REQUEST,
});

export const fetchMemesSuccess = (memes) => ({
    type: FETCH_MEMES_SUCCESS,
    payload: memes, 
});

export const fetchMemesFailure = (error) => ({
    type: FETCH_MEMES_FAILURE,
    payload:error,
});

//ASYNC ACTION CREATOR

export const fetchMemes = () => {
    return (dispatch) => {
        dispatch(fetchMemesRequest());
        axios
        .get(API_URL)
        .then((response)=> {
            dispatch(fetchMemesSuccess(response.data.data.memes));
        })
        .catch((error) => {
            dispatch(fetchMemesFailure(error.message));
        });
    };
};

