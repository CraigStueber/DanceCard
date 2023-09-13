import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loctionBtn: {
    width: 300,
    backgroundColor: "#d07028",
    marginBottom: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  locationTxt: { textAlign: "center", color: "white", fontSize: 25 },
  activitiesBtn: {
    width: 300,
    backgroundColor: "#593A7B",
    paddingVertical: 20,
    borderRadius: 10,
  },
  activitiesTxt: { textAlign: "center", color: "white", fontSize: 25 },
  recContainer: { flex: 1.3 },
  recHeader: {
    paddingLeft: 20,
    height: 50,
    backgroundColor: "#28143E",
    paddingTop: 10,
    fontSize: 20,
    color: "white",
  },
});
