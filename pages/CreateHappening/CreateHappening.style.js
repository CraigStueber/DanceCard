import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: { padding: 10 },
  fullInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconStyle: { width: 30, height: 30 },
  dropdownContainer: { width: "45%" },
  twoInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  placehoderText: { textAlign: "center" },
  descriptInput: {
    height: 200,
    textAlignVertical: "top",
    borderWidth: 1,
    padding: 10,
  },
  subBtn: {
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#28143E",
  },
  subtext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
