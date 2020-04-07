import { GET_REACT_ISSUES_LIST, GET_REACT_ISSUES_LIST_BY_TITLE, GET_DATA_LOADING } from "../constants/action-types";

const params = {
  'Access-Control-Allow-Origin' : '*',
  'mode' : 'cors'
};

export function getReactIssuesList() {
  return function (dispatch) {
    return fetch("https://api.github.com/search/issues?q=in:title+repo:facebook/react+is:issue&open",  params)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_REACT_ISSUES_LIST, payload: json.items });
      })
      .catch( error => {
        alert(error);
      });
  };
}

export function getReactIssuesListByTitle(item) {
  return function (dispatch) {
    return fetch("https://api.github.com/search/issues?q=" + item + "in:title+repo:facebook/react+is:issue&open", params)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_REACT_ISSUES_LIST_BY_TITLE, payload: json.items });
      });
  };
}

export function getDataLoading(state) {
    return { type: GET_DATA_LOADING, isLoading: state.isLoading };
  }
