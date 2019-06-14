import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import styles from "./ItemListing.styles";

import { getItems } from "Api/item";

class ItemListingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount() {
    console.log("componentWillMount");
    //this.props.setLoading();
    getItems().then(response => {
      console.log(JSON.stringify(response));
      console.log("got items");
      this.setState({ items: response.data });
    });
  }

  _keyExtractor = (item, index) => item.title;

  _renderItem = ({ item }) => <FluidImage url={item.image_url} />;

  static navigationOptions = {
    title: "Items"
  };

  render() {
    console.log("ItemListingScreen");
    console.log(this.props.navigation.getParam("element"));
    const { items } = this.state;
    return (
      <View>
        {items.map(item => {
          return <Text key={item.id}>{item.name}</Text>;
        })}
      </View>
    );
  }
}

export default ItemListingScreen;
