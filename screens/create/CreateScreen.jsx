import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import CreateItem from "./item";

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    title: "Create"
  };

  onSubmit = (routeName, element) => {
    console.log("routeName: ", routeName);
    const { navigate } = this.props.navigation;
    navigate({ routeName, params: { element } });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CreateItem
          onSubmit={this.onSubmit}
          navigate={this.props.navigation.navigate}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
