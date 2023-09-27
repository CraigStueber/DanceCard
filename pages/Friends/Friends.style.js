import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
  },

  btn: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#c4c5de",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  nameSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  borderLine: {
    height: 5,
    backgroundColor: "#593a7b",
    marginVertical: 10,
  },
  label: {
    color: "#593a7b",
  },
});
