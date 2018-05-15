import React from "react";
import { View } from "react-native";

import { Login } from "~/components";
import { styles } from "~/styles";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: "bar"
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Login foo={this.state.foo} navigation={this.props.navigation} />;
      </View>
    );
  }
}
