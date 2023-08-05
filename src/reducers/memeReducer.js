import { FETCH_MEMES_FAILURE, FETCH_MEMES_REQUEST, FETCH_MEMES_SUCCESS } from "../actions/memeActions";

const initialState = {
    memes: [],
    loading:false,
    error:null
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
                memes: action.payload,
            };
        case FETCH_MEMES_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload
            };
            default:
                return state;
    }
};

export default memeReducer;