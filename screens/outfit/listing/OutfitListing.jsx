import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

import styles from "./OutfitListing.styles";

import FluidImage from "Components/ui/FluidImage";
import { getOutfits } from "Api/outfit";
import Data from "./OutfitListing.data";

class OutfitListingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { outfits: [] };
  }

  componentWillMount() {
    console.log("hello");
    //this.props.setLoading();
    getOutfits().then(response => {
      this.setState({ outfits: response.data });
    });
  }

  _keyExtractor = (item, index) => item.title;

  _renderItem = ({ item }) => <FluidImage url={item.image_url} />;

  static navigationOptions = {
    title: "Outfits"
  };

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.outfits}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default OutfitListingScreen;
