import React from "react";
import { Image } from "react-native";

import styles from "./FluidImage.styles";

const FluidImage = ({ url }) => (
  <Image style={styles.image} resizeMode="cover" source={{ url: url }} />
);

export default FluidImage;
