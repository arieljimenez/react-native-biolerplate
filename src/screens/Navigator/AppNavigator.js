import React from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "~/screens/Home/HomeScreen";
import LoginScreen from "~/screens/Login/LoginScreen";

export default function AppNavigator(props) {
  return <Navigator />;
}

const Navigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});
