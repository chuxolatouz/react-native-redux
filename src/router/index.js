import { StackNavigator } from "react-navigation";
import Data from "../components/data";
import Login from "../components/login";

export default StackNavigator(
  {
    Home: {
      screen: Data
    },
    Login: {
      screen: Login,
      navigationOptions: { tabBarVisible: false }
    }
  },
  {
    initialRouteName: "Login"
  },
  { mode: "card" }
);
