import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import { Login } from "~/components";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: "bar"
    };
  }

  render() {
    return <Login />;
  }
}

LoginScreen.propTypes = {
  foo: PropTypes.string.isRequired
};

const styles = StyleSheet.create({});
