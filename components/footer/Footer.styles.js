import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
  },
  calendar_btn: {
    backgroundColor: "#c4c5de",
    flex: 1,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  calendarTxt: {
    color: "#28143E",
    fontFamily: "Konnet-Italic",
  },
  message_btn: {
    backgroundColor: "#28143E",
    flex: 1,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  messageTxt: {
    color: "white",
    fontFamily: "Konnet-ExtraBold",
  },
  search_btn: {
    backgroundColor: "#d07028",
    flex: 1,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchTxt: {
    color: "white",
    fontFamily: "Konnet-Regular",
  },
});
