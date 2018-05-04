import Search from "../API/Search";
export const DATA_AVAILABLE = "DATA_AVAILABLE";

//Import the sample data
import Data from "./instructions.json";

export function getData() {
  return dispatch => {
    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data.instructions;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 2000);
  };
}

export const getProducts = () => {
  return dispatch => {
    Search.data().then(response => {
      dispatch({ type: DATA_AVAILABLE, data: response.data });
    });
  };
};
