import randomuserapi from "../apis/randomuserapi";
export const getData = (noofresults) => async (dispatch) => {
  const response = await randomuserapi.get("", {
    params: {
      results: noofresults,
    },
  });
  dispatch({ type: "FETCH_DATA", payload: response.data.results });
};
export const selectuser = (user) => (dispatch) => {
  dispatch({ type: "SELECTED_USER", payload: user });
};
