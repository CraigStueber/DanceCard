import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  containerCard: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#ece4d6",
  },
  icon: {
    height: 75,
    width: 75,
  },
  textContainer: { paddingLeft: 20 },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  date: {
    paddingRight: 30,
  },
  time: {
    marginLeft: 20,
    justifyContent: "flex-end",
  },
  locationContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  location: {
    paddingRight: 30,
  },
});
