import { combineReducers } from "redux";

const datareducer = (state = {}, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state,payload:action.payload };
      default:
        return state;
    }
};

const dataselectreducer=(selecteduser={},action)=>{
    switch (action.type) {
      case "SELECTED_USER":
        return { ...selecteduser, payload: action.payload };
      default:
        return selecteduser;
    }
}

export default combineReducers({
  fetch: datareducer,
  selectedUser:dataselectreducer
});
