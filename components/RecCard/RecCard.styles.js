import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  activityImage: { height: 100, width: 100, borderRadius: 20 },
  textContainer: { paddingLeft: 20 },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
