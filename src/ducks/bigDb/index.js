
export const BIG_REQUEST = 'BIG_REQUEST';
export const BIG_SUCCESS = 'BIG_SUCCESS';
export const BIG_FAILER = 'BIG_FAILER';
export const SORT_BY_UP = 'SORT_BY_UP';
export const SORT_BY_DOWN = 'SORT_BY_DOWN';

export const bigRequest = (payload) => ({
    type: BIG_REQUEST,
    payload: payload
});
export const bigSuccess = (payload) => ({
    type: BIG_SUCCESS,
    payload: payload
});
export const bigFailer = (error) => ({
    type: BIG_FAILER,
    error: error
});

export const sortByUp = (payload, key) => ({ type: SORT_BY_UP, payload: payload, key: key });

export const sortByDown = (payload, key) => ({ type: SORT_BY_DOWN, payload: payload, key: key });

const initState = {
    data: [],
    isLoading: false,
    error: null
}

const bigReducer = (state=initState, action) => {
    switch (action.type) {
      case BIG_REQUEST:
        return { ...state, isLoading: true };
      case BIG_SUCCESS:
        return { ...state, isLoading: false, data: action.payload };
      case BIG_FAILER:
        return { ...state, isLoading: false, error: action.error };
      case SORT_BY_UP:
        return { ...state, data: Array.from(action.payload.sort(sortByEl(action.key))) };
      case SORT_BY_DOWN:
        return { ...state, data: Array.from(action.payload.sort(sortByEl(action.key, 1))) };
      default:
        return state;
    }
}

export const getData = state => state.bigDb.data;
export const getIsLoading = state => state.bigDb.isLoading;
export const getError = state => state.bigDb.error;

export default bigReducer;

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