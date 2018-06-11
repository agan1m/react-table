
export const SMALL_REQUEST = 'SMALL_REQUEST';
export const SMALL_SUCCESS = 'SMALL_SUCCESS';
export const SMALL_FAILER = 'SMALL_FAILER';
export const SORT_BY_UP = 'SORT_BY_UP';
export const SORT_BY_DOWN = 'SORT_BY_DOWN';

export const smallRequest = (payload) => ({
    type: SMALL_REQUEST,
    payload: payload
})

export const smallSuccess = (payload) => ({
    type: SMALL_SUCCESS,
    payload: payload
})

export const smallFailer = (error) => ({
    type: SMALL_FAILER,
    error: error
})

export const sortByUp = (payload, key) => ({ type: SORT_BY_UP, payload: payload, key: key });

export const sortByDown = (payload, key) => ({ type: SORT_BY_DOWN, payload: payload, key: key });

const initState = {
    isLoading: false,
    error: null,
    data: []
}

const smallReducer = (state=initState, action) => {
    switch (action.type) {
      case SMALL_REQUEST:
        return { ...state, isLoading: true };
      case SMALL_SUCCESS:
        return { ...state, data: action.payload, isLoading: false };
      case SMALL_FAILER:
        return { ...state, error: action.error, isLoading: false };
      case SORT_BY_UP:
        return { ...state, data: Array.from(action.payload.sort(sortByEl(action.key))) };
      case SORT_BY_DOWN:
        return { ...state, data: Array.from(action.payload.sort(sortByEl(action.key, 1))) };
      default:
        return state;
    }
}

export const getData = state => state.smallDb.data;
export const getIsLoading = state => state.smallDb.isLoading;
export const getError = state => state.smallDb.error;

export default smallReducer;

function sortByEl(key, reverse) {
 
  var moveSmaller = reverse ? 1 : -1;

  var moveLarger = reverse ? -1 : 1;

  return function(a, b) {
    if (a[key] < b[key]) {
      return moveSmaller;
    }
    if (a[key] > b[key]) {
      return moveLarger;
    }
    return 0;
  };
}