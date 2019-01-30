const initialState = {
    data: [],
    loading: false,
    error: false,
    selectedItem: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'GET_PLACES_PREPARE':
    return { ...state, loading: true };
    case 'GET_PLACES_SUCCCESS':
    return { ...state, loading: false, data: action.payload };
    case 'GET_PLACES_FAILED':
    return { ...state, loading: false, error: true };
    case 'SELECT_ITEM':
    return { ...state, selectedItem: action.payload };

  default:
    return state
  }
};
