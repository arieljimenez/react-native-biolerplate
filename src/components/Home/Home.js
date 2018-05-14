import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

export default function Home(props) {
  return <Text>Home Comp</Text>;
}

Home.propTypes = {
  foo: PropTypes.string.isRequired
};

const styles = StyleSheet.create({});
