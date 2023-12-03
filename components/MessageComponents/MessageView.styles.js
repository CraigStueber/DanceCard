import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 10,
    borderTopColor: "#d07028",
    borderTopWidth: 2,
    borderBottomColor: "#d07028",
    borderBottomWidth: 2,
    flexDirection: "row",
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textView: {
    paddingHorizontal: 10,
    flexDirection: "column",
    paddingVertical: 10,
    color: "#593a7b",

    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  text: {
    color: "#593a7b",
  },
});
