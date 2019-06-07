import React, { Component } from "react";

import { View, Text, Image } from "react-native";

import styles from "./OutfitListing.styles";

import Card from "Components/ui/Card";

import Data from "./OutfitListing.data";

class OutfitListingScreen extends Component {
  componentDidMount() {
    console.log("hello");
  }

  static navigationOptions = {
    title: "Outfits"
  };

  render() {
    return (
      <View style={styles.container}>
        {Data.map(outfit => (
          <View style={styles.card} key={outfit.title}>
            <Card>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{ url: outfit.url }}
              />
            </Card>
          </View>
        ))}
      </View>
    );
  }
}

export default OutfitListingScreen;
