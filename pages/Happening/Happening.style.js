import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  createContainer: {
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#d07028",
  },
  createText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  filterTxt: { fontSize: 15, marginRight: 10 },
  filterContainer: {
    backgroundColor: "#Bedee0",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingRight: 10,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
  activityImage: { height: 80, width: 80, borderRadius: 20 },
  textContainer: { paddingLeft: 20 },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  icon: {
    height: 75,
    width: 75,
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
