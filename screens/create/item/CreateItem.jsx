import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";

import { View, Text, Button } from "react-native";

import styles from "./CreateItem.styles";

import FluidImage from "Components/ui/FluidImage";
import { createItem } from "Api/item";
//import Data from "./CreateItem.data";
import ROUTES from "Constants/routes";

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", price: "" };
  }

  onSubmit = () => {
    createItem(this.state).then(response => {
      this.props.onSubmit(ROUTES.items);
    });
  };

  goToItemScreen = () => {
    this.props.navigate(ROUTES.items);
  };

  updateField = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { name, price } = this.state;
    return (
      <View>
        <Text>Create an Item</Text>
        <TextField
          label="Title"
          value={name}
          onChangeText={value => this.updateField("name", value)}
        />

        <TextField
          label="Price"
          value={price}
          onChangeText={value => this.updateField("price", value)}
        />

        <Button
          onPress={this.onSubmit}
          title="Create"
          accessibilityLabel="Create an item"
        />

        <Button onPress={this.goToItemScreen} title="Go to items" />
      </View>
    );
  }
}

export default CreateItem;
