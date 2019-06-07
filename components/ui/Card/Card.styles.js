import { StyleSheet } from "react-native";
import colors from "Styles/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1
  }
});
