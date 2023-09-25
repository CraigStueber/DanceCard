import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },

  btn: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#c4c5de",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  profileImage: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  nameSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
