import { GET_REACT_ISSUES_LIST, GET_REACT_ISSUES_LIST_BY_TITLE, GET_DATA_LOADING } from "../constants/action-types";

const initialState = {
  reactIssuesList: [],
  isLoading: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_REACT_ISSUES_LIST:
      return Object.assign({}, state, {
        reactIssuesList: [...action.payload]
      });

    case GET_REACT_ISSUES_LIST_BY_TITLE:
      if (action.payload) {
        return Object.assign({}, state, {
          reactIssuesList: [...action.payload]
        });
      }
      return;
    case GET_DATA_LOADING:
      return { ...state, isLoading: !action.isLoading};

    default:
      return state;
  }
};

export default rootReducer;