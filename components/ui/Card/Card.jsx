import React from "react";
import { View, Text } from "react-native";

import styles from "./Card.styles";

const Card = ({ children }) => <View style={styles.container}>{children}</View>;

export default Card;
