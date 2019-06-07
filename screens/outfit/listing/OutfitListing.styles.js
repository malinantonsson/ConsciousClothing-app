import { StyleSheet } from "react-native";
import colors from "Styles/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.springWood,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  card: {
    flex: 1
  },
  image: {
    width: 300,
    height: 300
  }
});
