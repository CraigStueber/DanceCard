import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginVertical: 10,
    backgroundColor: "#c4cfde",
    borderRadius: 20,
    marginHorizontal: 10,
  },
  locationLogo: {
    width: 100,
    height: 100,
  },
  locationNameContainer: {
    justifyContent: "flex-start",
  },
  locationName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  locationBtn: {
    fontSize: 15,
    backgroundColor: "#D07028",
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  eventBtn: {
    fontSize: 15,
    backgroundColor: "#28143e",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
});
