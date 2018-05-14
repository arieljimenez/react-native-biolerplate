import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { Home } from "~/components";
import { styles } from "~/styles";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: "bar"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Home foo={this.state.foo} />
      </View>
    );
  }
}

// HomeScreen.propTypes = {
//   foo: PropTypes.string.isRequired
// };
