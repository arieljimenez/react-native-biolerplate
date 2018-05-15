import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

export default function Icon(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Ionicon name={props.name} size={props.size} />
    </TouchableOpacity>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  style: PropTypes.object
};

Icon.defaultProps = {
  size: 30,
  style: {
    paddingRight: 10,
    paddingLeft: 10
  }
};
