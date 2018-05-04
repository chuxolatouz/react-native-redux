import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
