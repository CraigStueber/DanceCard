import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {},
  topContainer: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  infoView: { paddingHorizontal: 20, paddingVertical: 20 },
  iconImage: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  descriptionContainer: { padding: 20 },
  descriptionTitle: { fontSize: 20, fontFamily: "Konnet-ExtraBold" },
  attendiesBtn: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    backgroundColor: "#28143E",
  },
  attendiesTitle: {
    fontSize: 30,
    color: "white",
  },
  icon: {},
  usersContainer: {
    flexDirection: "row",
  },
  userLine: {
    width: "100%",
    borderBottomColor: "#28143E",
    borderBottomWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userSubViews: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  userTxt: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
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
  attContainer: {},
  labelTextInfo: { fontWeight: "bold" },
  hostName: { fontWeight: "bold" },
  joinContainer: {
    position: "absolute",
    zIndex: 2,
    height: "95%",
    width: "90%",
    backgroundColor: "#c4c5de",
    color: "white",
    top: "2.5%",
    left: "5%",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
  },
  joinText: { fontFamily: "Konnet-Regular" },
  sideBySide: { flexDirection: "row", marginVertical: 20 },
  icon2Image: {
    width: 150,
    height: 150,
  },
  happeningName: {
    fontSize: 25,
    fontFamily: "Konnet-ExtraBold",
  },
  host: {
    fontSize: 18,
    fontFamily: "Konnet-ExtraBold",
  },
  textSBS: {
    paddingHorizontal: 20,
  },
  descView: {
    height: "25%",
    fontFamily: "Konnet-Regular",
  },
  fullInput: {
    width: "90%",
    backgroundColor: "white",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 5,
    fontFamily: "Konnet-Regular",
  },
  joinBtn: {
    width: "90%",
    backgroundColor: "#d07028",
    paddingVertical: 20,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  joinBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "Konnet-Regular",
  },
  nvmBtn: {
    width: "90%",
    backgroundColor: "#28143E",
    paddingVertical: 20,
    alignSelf: "center",
    borderRadius: 10,
  },
  locText: {
    fontSize: 18,
    fontFamily: "Konnet-ExtraBold",
  },
  descText: {
    fontFamily: "Konnet-Regular",
  },
});
